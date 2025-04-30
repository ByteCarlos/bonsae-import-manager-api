export enum Period {
  PRIMEIRO_SEMESTRE = '1º Semestre',
  SEGUNDO_SEMESTRE = '2º Semestre',
  PRIMEIRO_SEMESTRE_PRIMEIRO_BIMESTRE = '1º Semestre - 1º Bimestre',
  PRIMEIRO_SEMESTRE_SEGUNDO_BIMESTRE = '1º Semestre - 2º Bimestre',
  SEGUNDO_SEMESTRE_PRIMEIRO_BIMESTRE = '2º Semestre - 1º Bimestre',
  SEGUNDO_SEMESTRE_SEGUNDO_BIMESTRE = '2º Semestre - 2º Bimestre',
}

export interface SchoolPeriodRawEntry {
  code: string,
  name: Period,
  startDate: Date,
  endDate: Date
}

export const toSchoolPeriodRawEntry = (raw: any): SchoolPeriodRawEntry => {
  return {
    code: String(raw.code),
    name: raw.schoolPeriod as Period,
    startDate: new Date(raw.startDate),
    endDate: new Date(raw.endDate)
  };
}