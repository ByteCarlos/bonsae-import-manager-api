import { BundleDto } from "../dtos/BundleDto";
import { ClassRawEntryDto } from "../dtos/ClassRawEntryDto";
import { EnrollmentDto } from "../dtos/EnrollmentRawEntryDto";
import { SchoolPeriodRawEntryDto } from "../dtos/SchoolPeriodRawEntryDto";
import { SubjectRawEntryDto } from "../dtos/SubjectRawEntryDto";
import { UserRawEntryDto } from "../dtos/UserRawEntryDto";
import ClassDocument from "../models/documents/ClassDocument";
import ProfessorEnrollmentDocument from "../models/documents/ProfessorEnrollmentDocument";
import SchoolPeriodDocument from "../models/documents/SchoolPeriodDocument";
import StudentEnrollmentDocument from "../models/documents/StudentEnrollmentDocument";
import SubjectDocument from "../models/documents/SubjectDocument";
import UserDocument from "../models/documents/UserDocument";

export class DocumentService {
  async createDataBundle(schoolPeriodCode: string): Promise<BundleDto | null> {
    const schoolPeriodDoc = await SchoolPeriodDocument.findOne({ code: schoolPeriodCode });
    if (!schoolPeriodDoc) {
      return null;
    }

    const subjectsDoc = await SubjectDocument.find({ periodId: schoolPeriodDoc.code });
    if (!subjectsDoc || subjectsDoc.length === 0) {
      return null;
    }
    const subjectsDto = subjectsDoc.flatMap(subjectDoc => subjectDoc as SubjectRawEntryDto);

    const classesDocs = await Promise.all(
      subjectsDto.flatMap(subject => ClassDocument.find({ subjectCode: subject.code }))
    );
    if (!classesDocs || classesDocs.length === 0) {
      return null;
    }
    const classesDto: ClassRawEntryDto[] = classesDocs.flat().map(classDoc =>
      classDoc as ClassRawEntryDto
    );

    const [profEnrollmentDocsArray, studentEnrollmentDocsArray] = await Promise.all([
      Promise.all(classesDto.map(classDto => ProfessorEnrollmentDocument.find({ classCode: classDto.code }))),
      Promise.all(classesDto.map(classDto => StudentEnrollmentDocument.find({ classCode: classDto.code })))
    ]);
    
    const profEnrollmentDocs = profEnrollmentDocsArray.flat();
    const studentEnrollmentDocs = studentEnrollmentDocsArray.flat();
    if (profEnrollmentDocs.length === 0 || studentEnrollmentDocs.length === 0) {
      return null;
    }
    
    const enrollmentsDto: EnrollmentDto[] = [
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
      enrollmentsDto.map(enrollment => UserDocument.find({
        $or: [
          { email: enrollment.email },
          { registrationNumber: enrollment.registrationNumber }
        ]
      }))
    );
    if (!userDocs || userDocs.length === 0) {
      return null;
    }

    const usersDto: UserRawEntryDto[] = userDocs.flat().map(userDoc => userDoc as UserRawEntryDto);

    const dataBundle: BundleDto = {
      schoolPeriods: [schoolPeriodDoc as SchoolPeriodRawEntryDto],
      subjects: subjectsDto,
      classes: classesDto,
      users: usersDto,
      enrollments: enrollmentsDto
    };

    return dataBundle;
  }
}