export interface EnrollmentDto {
    subjectCode: string,
    classCode: string,
    registrationNumber?: string,
    email?: string,
    professor: boolean
}

export interface StudentEnrollmentRawEntryDto {
    subjectCode: string,
    classCode: string,
    registrationNumber?: string,
    studentEmail?: string
}

export interface ProfessorEnrollmentRawEntryDto {
    subjectCode: string,
    classCode: string,
    registrationNumber?: string,
    professorEmail?: string
}