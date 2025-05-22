import { ClassDtoData } from "../dtos/ClassDto";
import { EnrollmentDtoData, ProfessorEnrollmentDtoData, StudentEnrollmentDtoData } from "../dtos/EnrollmentDto";
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
  async bundleProcessData(processId: string): Promise<ProcessDto> {
    const [
      schoolPeriods,
      subjects,
      classes,
      users,
      professorEnrollments,
      studentEnrollments
    ] = await Promise.all([
      SchoolPeriodDocument.find({ processId }),
      SubjectDocument.find({ processId }),
      ClassDocument.find({ processId }),
      UserDocument.find({ processId }),
      ProfessorEnrollmentDocument.find({ processId }),
      StudentEnrollmentDocument.find({ processId })
    ]);

    const enrollments: EnrollmentDtoData[] = [
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

    console.log(schoolPeriods, subjects, classes, users, enrollments)

    return {
      processId,
      schoolPeriods: schoolPeriods as SchoolPeriodDtoData[],
      subjects: subjects as SubjectDtoData[],
      classes: classes as ClassDtoData[],
      users: users as UserDtoData[],
      enrollments,
    };
  }
}

export async function checkDuplicateUsers(data: UserDtoData[], processId: string) {
  const duplicates = await Promise.all(
    data.map(user =>
      UserDocument.findOne({ profileId: user.profileId, name: user.name, processId })
    )
  );

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