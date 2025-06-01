import ClassDocument from "../models/documents/ClassDocument.js";
import ProcessDocument from "../models/documents/ProcessDocument.js";
import ProfessorEnrollmentDocument from "../models/documents/ProfessorEnrollmentDocument.js";
import SchoolPeriodDocument from "../models/documents/SchoolPeriodDocument.js";
import StudentEnrollmentDocument from "../models/documents/StudentEnrollmentDocument.js";
import SubjectDocument from "../models/documents/SubjectDocument.js";
import UserDocument from "../models/documents/UserDocument.js";
export class DocumentService {
    async bundleProcessData(processId) {
        const [schoolPeriod, subjects, classes, users, professorEnrollments, studentEnrollments] = await Promise.all([
            SchoolPeriodDocument.findOne({ processId: processId }),
            SubjectDocument.find({ processId }),
            ClassDocument.find({ processId }),
            UserDocument.find({ processId }),
            ProfessorEnrollmentDocument.find({ processId }),
            StudentEnrollmentDocument.find({ processId })
        ]);
        console.log(processId);
        const enrollments = [
            ...professorEnrollments.map(enrollment => ({
                subjectCode: enrollment.subjectCode,
                classCode: enrollment.classCode,
                email: enrollment.professorEmail ?? undefined,
                registrationNumber: enrollment.registrationNumber ?? undefined,
                professor: true
            })),
            ...studentEnrollments.map(enrollment => ({
                subjectCode: enrollment.subjectCode,
                classCode: enrollment.classCode,
                email: enrollment.studentEmail ?? undefined,
                registrationNumber: enrollment.registrationNumber ?? undefined,
                professor: false
            }))
        ];
        return {
            processId,
            schoolPeriod: schoolPeriod,
            subjects: subjects,
            classes: classes,
            users: users,
            enrollments,
        };
    }
    async processAllInOne(data) {
        try {
            const processDoc = await this.createProcess(data.processId);
            const periodDoc = await this.createSchoolPeriod(data.schoolPeriod, processDoc);
            const subjectDocList = await this.createSubjects(data.subjects, processDoc);
            const classDocList = await this.createClasses(data.classes, processDoc);
            const userDocList = await this.createUsers(data.users, processDoc);
            const enrollmentDocList = await this.createEnrollments(data.enrollments, processDoc);
            return {
                processDoc,
                periodDoc,
                subjectDocList,
                classDocList,
                userDocList,
                enrollmentDocList,
            };
        }
        catch (error) {
            console.error('Error inserting documents:', error);
            throw error;
        }
    }
    async createProcess(processId) {
        let processDoc = await ProcessDocument.findOne({ processId });
        if (!processDoc) {
            processDoc = new ProcessDocument({
                processId,
                currentStatus: 'INICIADO',
            });
            await processDoc.save();
        }
        return processDoc;
    }
    async createSchoolPeriod(schoolPeriod, processDoc) {
        const existingDoc = await SchoolPeriodDocument.findOne({
            processId: processDoc.processId,
            code: schoolPeriod.code,
        });
        if (existingDoc)
            return existingDoc;
        const newDoc = new SchoolPeriodDocument({
            ...schoolPeriod,
            processId: processDoc.processId,
            processRef: processDoc._id,
        });
        return newDoc.save();
    }
    async createSubjects(subjects, processDoc) {
        return Promise.all(subjects.map(async (entry) => {
            const schoolPeriod = await SchoolPeriodDocument.findOne({
                code: entry.periodId,
                processId: processDoc.processId,
            });
            if (!schoolPeriod) {
                throw new Error(`School Period not found (code: ${entry.periodId})`);
            }
            const subjectDoc = new SubjectDocument({
                ...entry,
                schoolPeriodRef: schoolPeriod._id,
                processId: processDoc.processId,
                processRef: processDoc._id,
            });
            return subjectDoc.save();
        }));
    }
    async createClasses(classes, processDoc) {
        return Promise.all(classes.map(async (entry) => {
            const subject = await SubjectDocument.findOne({
                code: entry.subjectCode,
                processId: processDoc.processId,
            });
            if (!subject) {
                throw new Error(`Subject not found (code: ${entry.subjectCode})`);
            }
            const classDoc = new ClassDocument({
                ...entry,
                subjectRef: subject._id,
                processId: processDoc.processId,
                processRef: processDoc._id,
            });
            return classDoc.save();
        }));
    }
    async createUsers(users, processDoc) {
        return Promise.all(users.map(async (entry) => {
            const userDoc = new UserDocument({
                ...entry,
                processId: processDoc.processId,
                processRef: processDoc._id,
            });
            return userDoc.save();
        }));
    }
    async createEnrollments(enrollments, processDoc) {
        return Promise.all(enrollments.map(async (entry) => {
            const [subjectDoc, classDoc, userDoc] = await Promise.all([
                SubjectDocument.findOne({ code: entry.subjectCode, processId: processDoc.processId }),
                ClassDocument.findOne({ code: entry.classCode, processId: processDoc.processId }),
                UserDocument.findOne({
                    $or: [
                        { email: entry.email },
                        { registrationNumber: entry.registrationNumber }
                    ],
                    processId: processDoc.processId,
                }),
            ]);
            if (!subjectDoc) {
                throw new Error(`Subject not found (code: ${entry.subjectCode})`);
            }
            if (!classDoc) {
                throw new Error(`Class not found (code: ${entry.classCode})`);
            }
            if (!userDoc) {
                throw new Error(`User not found (email: ${entry.email}, registration: ${entry.registrationNumber})`);
            }
            if (entry.professor) {
                const professorEnrollment = new ProfessorEnrollmentDocument({
                    ...entry,
                    professorEmail: entry.email,
                    userRef: userDoc._id,
                    classRef: classDoc._id,
                    subjectRef: subjectDoc._id,
                    processId: processDoc.processId,
                    processRef: processDoc._id,
                });
                return professorEnrollment.save();
            }
            else {
                const studentEnrollment = new StudentEnrollmentDocument({
                    ...entry,
                    studentEmail: entry.email,
                    userRef: userDoc._id,
                    classRef: classDoc._id,
                    subjectRef: subjectDoc._id,
                    processId: processDoc.processId,
                    processRef: processDoc._id,
                });
                return studentEnrollment.save();
            }
        }));
    }
}
//# sourceMappingURL=DocumentService.js.map