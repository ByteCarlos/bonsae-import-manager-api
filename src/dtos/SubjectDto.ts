export interface SubjectDto {
    processId: string;
    data: SubjectDtoData[];
}

export interface SubjectDtoData {
    periodId: string,
    name?: string,
    code: string,
    startDate: Date,
    endDate: Date,
    category: 'CURSO' | 'NPJ' | 'PROJETOS_EXTENSIONISTAS' | 'TCC',
    period?: '1' | '2'| '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
    state?: number,
    campus?: string
}