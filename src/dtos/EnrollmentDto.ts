export interface EnrollmentDto {
    processId: string;
    data: EnrollmentDtoData[];
}

export interface EnrollmentDtoData {
    subjectCode: string,
    classCode: string,
    registrationNumber?: string,
    email?: string,
    professor: boolean
}

export interface StudentEnrollmentDto {
    processId: string;
    data: StudentEnrollmentDtoData[];
}

export interface StudentEnrollmentDtoData {
    subjectCode: string,
    classCode: string,
    registrationNumber?: string,
    studentEmail?: string
}

export interface ProfessorEnrollmentDto {
    processId: string;
    data: ProfessorEnrollmentDtoData[];
}

export interface ProfessorEnrollmentDtoData {   
    subjectCode: string,
    classCode: string,
    registrationNumber?: string,
    professorEmail?: string
}