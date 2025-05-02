// Os dados de matricula foram divididos em professor e aluno pois existe uma planilha para cada vinculo.
// Porém, os dados são exatamente iguais e existe apenas uma tabela para eles no banco,
// então eles podem ser unificados em uma interface como essa:
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