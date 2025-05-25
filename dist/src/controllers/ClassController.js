import ClassDocument from '../models/documents/ClassDocument.js';
import SubjectDocument from '../models/documents/SubjectDocument.js';
import ProcessDocument from '../models/documents/ProcessDocument.js';
import ProfessorEnrollmentDocument from '../models/documents/ProfessorEnrollmentDocument.js';
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
            const classes = await Promise.all(req.body.data.map(async (classEntry) => {
                const subjectDocument = await SubjectDocument.findOne({ code: classEntry.subjectCode });
                if (!subjectDocument) {
                    throw new Error(`Subject not found for code: ${classEntry.subjectCode}`);
                }
                return new ClassDocument({
                    ...classEntry,
                    subjectRef: subjectDocument._id,
                    processId: processDoc.processId,
                    processRef: processDoc._id
                });
            }));
            await ClassDocument.insertMany(classes);
            return res.status(201).json(classes);
        }
        catch (error) {
            console.error('Error inserting classes:', error);
            return res.status(500).json({ error: error.message });
        }
    },
    async store(req, res) {
        try {
            const { processId } = req.body;
            const classData = req.body.data;
            const existingClass = await ClassDocument.findOne({ code: classData.code, processId });
            if (existingClass) {
                return res.status(409).json({ error: `Class ${classData.code} already created in this process` });
            }
            const process = await ProcessDocument.findOne({ processId });
            if (!process) {
                return res.status(404).json({ error: 'Process not found' });
            }
            classData.processId = processId;
            classData.processRef = process._id;
            const classDoc = new ClassDocument(classData);
            const subjectDoc = await SubjectDocument.findOne({ code: classDoc.subjectCode });
            if (!subjectDoc) {
                throw new Error(`Subject not found for code: ${classDoc.subjectCode}`);
            }
            classDoc.subjectRef = subjectDoc._id;
            await classDoc.save();
            return res.status(201).json(classDoc);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async index(_req, res) {
        try {
            const classes = await ClassDocument.find().populate('subjectRef');
            return res.status(200).json(classes);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async show(req, res) {
        try {
            let classDoc;
            if (req.params.id) {
                classDoc = await ClassDocument.findOne({ processId: req.body.processId, _id: req.params.id });
            }
            else {
                classDoc = await ClassDocument.findOne({ code: req.body.code, processId: req.body.processId });
            }
            if (!classDoc)
                return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json(classDoc);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async update(req, res) {
        try {
            const { processId, subjectCode, ...data } = req.body;
            if (subjectCode) {
                const subject = await SubjectDocument.findOne({ code: subjectCode, processId: processId });
                if (!subject)
                    return res.status(404).json({ error: 'Subject not found' });
                data.subjectCode = subjectCode;
                data.subjectRef = subject._id;
            }
            const updatedClass = await ClassDocument.findOneAndUpdate({ code: req.params.id, processId: processId }, data, { new: true, runValidators: true });
            if (!updatedClass)
                return res.status(404).json({ error: 'Class not found' });
            if (updatedClass.code != req.params.id) {
                await ProfessorEnrollmentDocument.updateMany({ processId: processId, classRef: updatedClass?._id }, { $set: { classCode: updatedClass.code } });
                await StudentEnrollmentDocument.updateMany({ processId: processId, classRef: updatedClass?._id }, { $set: { classCode: updatedClass.code } });
            }
            return res.status(200).json(updatedClass);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async destroy(req, res) {
        try {
            let classDoc;
            if (req.params.id) {
                classDoc = await ClassDocument.findOneAndDelete({ processId: req.body.processId, _id: req.params.id });
            }
            else {
                classDoc = await ClassDocument.findOneAndDelete({ code: req.body.code, processId: req.body.processId });
            }
            if (!classDoc)
                return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json({ message: 'Class deleted successfully' });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};
//# sourceMappingURL=ClassController.js.map