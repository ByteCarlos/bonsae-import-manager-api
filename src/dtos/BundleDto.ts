import { ClassRawEntryDto } from "./ClassRawEntryDto";
import { ProfessorEnrollmentRawEntryDto, StudentEnrollmentRawEntryDto } from "./EnrollmentRawEntryDto";
import { SchoolPeriodRawEntryDto } from "./SchoolPeriodRawEntryDto";
import { SubjectRawEntryDto } from "./SubjectRawEntry";
import { UserRawEntryDto } from "./UserRawEntryDto";

export interface BundleDto {
    schoolPeriods: SchoolPeriodRawEntryDto[];
    subjects: SubjectRawEntryDto[];
    classes: ClassRawEntryDto[];
    users: UserRawEntryDto[];
    studentsEnrollments: StudentEnrollmentRawEntryDto[];
    professorEnrollments: ProfessorEnrollmentRawEntryDto[];
}