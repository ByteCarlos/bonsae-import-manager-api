import SubjectDocument from '../models/documents/SubjectDocument.js';
import ClassDocument from '../models/documents/ClassDocument.js';
import UserDocument from '../models/documents/UserDocument.js';
import ProcessDocument from '../models/documents/ProcessDocument.js';
import StudentEnrollmentDocument from '../models/documents/StudentEnrollmentDocument.js';
export default {
    async storeBatch(req, res) {
        try {
            const { processId, data } = req.body;
            if (!processId || !Array.isArray(data)) {
                return res.status(400).json({ error: "Missing or invalid 'processId' or 'data' in request body" });
            }
            const processDoc = await ProcessDocument.findOne({ processId });
            if (!processDoc) {
                return res.status(404).json({ error: "Process not found" });
            }
            const enrollments = await Promise.all(req.body.data.map(async (entry) => {
                const [subject, classDoc, user] = await Promise.all([
                    SubjectDocument.findOne({ code: entry.subjectCode }),
                    ClassDocument.findOne({ code: entry.classCode }),
                    UserDocument.findOne({
                        $or: [
                            { email: entry.studentEmail },
                            { registrationNumber: entry.registrationNumber }
                        ]
                    })
                ]);
                if (!subject) {
                    throw new Error(`Subject not found (code: ${entry.subjectCode})`);
                }
                if (!classDoc) {
                    throw new Error(`Class not found (code: ${entry.classCode})`);
                }
                if (!user) {
                    throw new Error(`User not found (email: ${entry.studentEmail}, registration: ${entry.registrationNumber})`);
                }
                return new StudentEnrollmentDocument({
                    ...entry,
                    subjectRef: subject._id,
                    classRef: classDoc._id,
                    userRef: user._id,
                    processId: processDoc.processId,
                    processRef: processDoc._id
                });
            }));
            await StudentEnrollmentDocument.insertMany(enrollments);
            return res.status(201).json(enrollments);
        }
        catch (error) {
            console.error('Error inserting enrollments:', error);
            return res.status(500).json({ error: error.message });
        }
    },
    async store(req, res) {
        try {
            const { processId } = req.body;
            const enrollmentData = req.body.data;
            const existingEnrollment = await StudentEnrollmentDocument.findOne({
                subjectCode: enrollmentData.subjectCode,
                classCode: enrollmentData.classCode,
                registrationNumber: enrollmentData.registrationNumber,
                studentEmail: enrollmentData.studentEmail
            });
            if (existingEnrollment) {
                return res.status(409).json({ error: `Enrollment already created in this process`, enrollment: existingEnrollment });
            }
            const process = await ProcessDocument.findOne({ processId });
            if (!process) {
                return res.status(404).json({ error: 'Process not found' });
            }
            enrollmentData.processId = processId;
            enrollmentData.processRef = process;
            const enrollment = new StudentEnrollmentDocument(enrollmentData);
            const [subject, classDoc, user] = await Promise.all([
                SubjectDocument.findOne({ code: enrollment.subjectCode }),
                ClassDocument.findOne({ code: enrollment.classCode }),
                UserDocument.findOne({
                    $or: [
                        { email: enrollment.studentEmail },
                        { registrationNumber: enrollment.registrationNumber }
                    ]
                })
            ]);
            if (!subject) {
                throw new Error(`Subject not found (code: ${enrollment.subjectCode})`);
            }
            if (!classDoc) {
                throw new Error(`Class not found (code: ${enrollment.classCode})`);
            }
            if (!user) {
                throw new Error(`User not found (email: ${enrollment.studentEmail}, registration: ${enrollment.registrationNumber})`);
            }
            [enrollment.subjectRef, enrollment.classRef, enrollment.userRef] = [subject._id, classDoc._id, user._id];
            await enrollment.save();
            return res.status(201).json(enrollment);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async index(_req, res) {
        try {
            const enrollments = await StudentEnrollmentDocument.find().populate('userRef classRef subjectRef');
            return res.status(200).json(enrollments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async show(req, res) {
        try {
            const data = req.body;
            let enrollment;
            if (req.params.id) {
                enrollment = await StudentEnrollmentDocument.findOne({ processId: req.body.processId, _id: req.params.id });
                return res.status(200).json(enrollment);
            }
            const conditions = {
                processId: data.processId,
                subjectCode: data.subjectCode,
                classCode: data.classCode,
                $or: [
                    { studentEmail: data.studentEmail },
                    { registrationNumber: data.registrationNumber }
                ]
            };
            enrollment = await StudentEnrollmentDocument.findOne(conditions).populate('userRef classRef subjectRef');
            if (!enrollment)
                return res.status(404).json({ error: 'Student enrollment not found' });
            return res.status(200).json(enrollment);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async update(req, res) {
        try {
            const { processId, subjectCode, classCode, studentEmail, registrationNumber } = req.body;
            const enrollment = await StudentEnrollmentDocument.findOne({ _id: req.params.id, processId });
            if (!enrollment) {
                return res.status(404).json({ error: 'Student enrollment not found' });
            }
            let classDoc = null;
            if (classCode) {
                classDoc = await ClassDocument.findOne({
                    processId,
                    subjectCode,
                    code: classCode
                }).populate('subjectRef');
                if (!classDoc) {
                    return res.status(404).json({ error: 'Class not found' });
                }
            }
            let userDoc = null;
            if (studentEmail?.trim() || registrationNumber?.trim()) {
                userDoc = await UserDocument.findOne({
                    processId,
                    $or: [
                        ...(studentEmail?.trim() ? [{ email: studentEmail }] : []),
                        ...(registrationNumber?.trim() ? [{ registrationNumber }] : [])
                    ]
                });
                if (!userDoc) {
                    return res.status(404).json({ error: 'User not found' });
                }
            }
            const updateData = {
                processId,
                subjectCode,
            };
            if (classCode) {
                updateData.classCode = classCode;
                updateData.classRef = classDoc?._id;
                updateData.subjectRef = classDoc?.subjectRef;
            }
            if (studentEmail)
                updateData.studentEmail = studentEmail;
            if (registrationNumber)
                updateData.registrationNumber = registrationNumber;
            if (userDoc)
                updateData.userRef = userDoc._id;
            const updated = await StudentEnrollmentDocument.findByIdAndUpdate(enrollment._id, updateData, { new: true, runValidators: true });
            return res.status(200).json(updated);
        }
        catch (error) {
            console.error('Error updating student enrollment:', error);
            return res.status(500).json({ error: error.message });
        }
    },
    async destroy(req, res) {
        try {
            const enrollment = await StudentEnrollmentDocument.findOneAndDelete({ _id: req.params.id, processId: req.body.processId });
            if (!enrollment)
                return res.status(404).json({ error: 'Enrollment not found' });
            return res.status(200).json({ message: 'Enrollment deleted successfully' });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};
//# sourceMappingURL=StudentEnrollmentController.js.map