export interface StudentEnrollmentRawEntryDto {
    subjectCode: string,
    classCode: string,
    studentEnrollment?: string,
    studentEmail?: string
}

export const toStudentEnrollmentRawEntry = (raw: any): StudentEnrollmentRawEntryDto => {
    return {
        subjectCode: String(raw.subjectCode),
        classCode: String(raw.classCode),
        studentEnrollment: String(raw.studentEnrollment),
        studentEmail: String(raw.studentEmail)
    };
};

export interface ProfessorEnrollmentRawEntryDto {
    subjectCode: string,
    classCode: string,
    professorEnrollment?: string,
    professorEmail?: string
}

export const toProfessorEnrollmentRawEntry = (raw: any): ProfessorEnrollmentRawEntryDto => {
    return {
        subjectCode: String(raw.subjectCode),
        classCode: String(raw.classCode),
        professorEnrollment: String(raw.professorEnrollment),
        professorEmail: String(raw.studentEmail)
    };
};