import { ClassRawEntryDto } from "./ClassRawEntryDto";
import { EnrollmentDto, ProfessorEnrollmentRawEntryDto, StudentEnrollmentRawEntryDto } from "./EnrollmentRawEntryDto";
import { SchoolPeriodRawEntryDto } from "./SchoolPeriodRawEntryDto";
import { SubjectRawEntryDto } from "./SubjectRawEntryDto";
import { UserRawEntryDto } from "./UserRawEntryDto";

export interface BundleDto {
    schoolPeriods: SchoolPeriodRawEntryDto[];
    subjects: SubjectRawEntryDto[];
    classes: ClassRawEntryDto[];
    users: UserRawEntryDto[];
    enrollments: EnrollmentDto[];
}