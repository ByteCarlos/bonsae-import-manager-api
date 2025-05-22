import { ClassDtoData } from "./ClassDto";
import { EnrollmentDtoData } from "./EnrollmentDto";
import { SchoolPeriodDtoData } from "./SchoolPeriodDto";
import { SubjectDtoData } from "./SubjectDto";
import { UserDtoData } from "./UserDto";

export interface ProcessDto {
    processId: String;
    schoolPeriods: SchoolPeriodDtoData[];
    subjects: SubjectDtoData[];
    classes: ClassDtoData[];
    users: UserDtoData[];
    enrollments: EnrollmentDtoData[];
}