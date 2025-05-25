export declare enum Period {
    PRIMEIRO_SEMESTRE = "1\u00BA Semestre",
    SEGUNDO_SEMESTRE = "2\u00BA Semestre",
    PRIMEIRO_SEMESTRE_PRIMEIRO_BIMESTRE = "1\u00BA Semestre - 1\u00BA Bimestre",
    PRIMEIRO_SEMESTRE_SEGUNDO_BIMESTRE = "1\u00BA Semestre - 2\u00BA Bimestre",
    SEGUNDO_SEMESTRE_PRIMEIRO_BIMESTRE = "2\u00BA Semestre - 1\u00BA Bimestre",
    SEGUNDO_SEMESTRE_SEGUNDO_BIMESTRE = "2\u00BA Semestre - 2\u00BA Bimestre"
}
export interface SchoolPeriodDto {
    processId: string;
    data: SchoolPeriodDtoData[];
}
export interface SchoolPeriodDtoData {
    code: string;
    name: Period;
    startDate: Date;
    endDate: Date;
}
