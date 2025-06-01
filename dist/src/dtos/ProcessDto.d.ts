import { ClassDtoData } from "./ClassDto.js";
import { EnrollmentDtoData } from "./EnrollmentDto.js";
import { SchoolPeriodDtoData } from "./SchoolPeriodDto.js";
import { SubjectDtoData } from "./SubjectDto.js";
import { UserDtoData } from "./UserDto.js";
export interface ProcessDto {
    processId: string;
    schoolPeriod: SchoolPeriodDtoData;
    subjects: SubjectDtoData[];
    classes: ClassDtoData[];
    users: UserDtoData[];
    enrollments: EnrollmentDtoData[];
}
