import ClassDocument from "../models/documents/ClassDocument.js";
import ProfessorEnrollmentDocument from "../models/documents/ProfessorEnrollmentDocument.js";
import SchoolPeriodDocument from "../models/documents/SchoolPeriodDocument.js";
import StudentEnrollmentDocument from "../models/documents/StudentEnrollmentDocument.js";
import SubjectDocument from "../models/documents/SubjectDocument.js";
import UserDocument from "../models/documents/UserDocument.js";
export class DocumentService {
    async bundleProcessData(processId) {
        const [schoolPeriods, subjects, classes, users, professorEnrollments, studentEnrollments] = await Promise.all([
            SchoolPeriodDocument.find({ processId }),
            SubjectDocument.find({ processId }),
            ClassDocument.find({ processId }),
            UserDocument.find({ processId }),
            ProfessorEnrollmentDocument.find({ processId }),
            StudentEnrollmentDocument.find({ processId })
        ]);
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
            schoolPeriods: schoolPeriods,
            subjects: subjects,
            classes: classes,
            users: users,
            enrollments,
        };
    }
}
export async function checkDuplicateUsers(data, processId) {
    const duplicates = await Promise.all(data.map(user => UserDocument.findOne({ profileId: user.profileId, name: user.name, processId })));
    return data
        .map((user, index) => {
        if (duplicates[index]) {
            return {
                profileId: user.profileId,
                name: user.name
            };
        }
        return null;
    })
        .filter(Boolean);
}
//# sourceMappingURL=DocumentService.js.map