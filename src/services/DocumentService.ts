import { ClassDtoData } from "../dtos/ClassDto";
import { EnrollmentDtoData } from "../dtos/EnrollmentDto";
import { ProcessDto } from "../dtos/ProcessDto";
import { SchoolPeriodDtoData } from "../dtos/SchoolPeriodDto";
import { SubjectDtoData } from "../dtos/SubjectDto";
import { UserDtoData } from "../dtos/UserDto";
import ClassDocument from "../models/documents/ClassDocument";
import ProfessorEnrollmentDocument from "../models/documents/ProfessorEnrollmentDocument";
import SchoolPeriodDocument from "../models/documents/SchoolPeriodDocument";
import StudentEnrollmentDocument from "../models/documents/StudentEnrollmentDocument";
import SubjectDocument from "../models/documents/SubjectDocument";
import UserDocument from "../models/documents/UserDocument";

export class DocumentService {
  async createProcessData(schoolPeriodCode: string): Promise<ProcessDto | null> {
    const schoolPeriodDoc = await SchoolPeriodDocument.findOne({ code: schoolPeriodCode });

    if (!schoolPeriodDoc) {
      return null;
    }

    const subjectsDoc = await SubjectDocument.find({ periodId: schoolPeriodDoc.code });
    const subjectsDtoData = subjectsDoc.flatMap(subjectDoc => subjectDoc as SubjectDtoData);
    if (!subjectsDoc || subjectsDoc.length === 0) {
      return null;
    }

    const classesDocs = await Promise.all(
      subjectsDtoData.flatMap(subject => ClassDocument.find({ subjectCode: subject.code }))
    );
    if (!classesDocs || classesDocs.length === 0) {
      return null;
    }
    const classesDtoData: ClassDtoData[] = classesDocs.flat().map(classDoc =>
      classDoc as ClassDtoData
    );

    const [profEnrollmentDocsArray, studentEnrollmentDocsArray] = await Promise.all([
      Promise.all(classesDtoData.map(classDtoData => ProfessorEnrollmentDocument.find({ classCode: classDtoData.code }))),
      Promise.all(classesDtoData.map(classDtoData => StudentEnrollmentDocument.find({ classCode: classDtoData.code })))
    ]);
    
    const profEnrollmentDocs = profEnrollmentDocsArray.flat();
    const studentEnrollmentDocs = studentEnrollmentDocsArray.flat();
    if (profEnrollmentDocs.length === 0 || studentEnrollmentDocs.length === 0) {
      return null;
    }
    
    const enrollmentsDtoData: EnrollmentDtoData[] = [
      ...profEnrollmentDocs.map(enrollment => ({
        subjectCode: enrollment.subjectCode,
        classCode: enrollment.classCode,
        email: enrollment.professorEmail ?? undefined,
        registrationNumber: enrollment.registrationNumber ?? undefined,
        professor: true
      })),
      ...studentEnrollmentDocs.map(enrollment => ({
        subjectCode: enrollment.subjectCode,
        classCode: enrollment.classCode,
        email: enrollment.studentEmail ?? undefined,
        registrationNumber: enrollment.registrationNumber ?? undefined,
        professor: false
      }))
    ];      

    const userDocs = await Promise.all(
      enrollmentsDtoData.map(enrollment => UserDocument.find({
        $or: [
          { email: enrollment.email },
          { registrationNumber: enrollment.registrationNumber }
        ]
      }))
    );
    if (!userDocs || userDocs.length === 0) {
      return null;
    }

    const usersDtoData: UserDtoData[] = userDocs.flat().map(userDoc => userDoc as UserDtoData);

    const processData: ProcessDto = {
      schoolPeriods: [schoolPeriodDoc as SchoolPeriodDtoData],
      subjects: subjectsDtoData,
      classes: classesDtoData,
      users: usersDtoData,
      enrollments: enrollmentsDtoData
    };

    return processData;
  }
}