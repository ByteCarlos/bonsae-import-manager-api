export interface SubjectRawEntryDto {
    periodId: number,
    subjectName?: string,
    subjectCode: string,
    startDate: Date,
    endData: Date,
    category: 'CURSO' | 'NPJ' | 'PROJETOS_EXTENSIONISTAS' | 'TCC',
    curricularPeriod?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    state?: string,
    campus?: string
}

export const toSubjectRawEntryDto = (raw: any): SubjectRawEntryDto => {
    return {
        periodId: Number(raw.periodId),
        subjectName: raw.subjectName ? String(raw.subjectName) : undefined,
        subjectCode: String(raw.subjectCode),
        startDate: new Date(raw.startDate),
        endData: new Date(raw.endData),
        category: raw.category as 'CURSO' | 'NPJ' | 'PROJETOS_EXTENSIONISTAS' | 'TCC',
        curricularPeriod: raw.curricularPeriod ? Number(raw.curricularPeriod) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 : undefined,
        state: raw.state ? String(raw.state) : undefined,
        campus: raw.campus ? String(raw.campus) : undefined
    };
};