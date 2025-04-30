export enum ShiftEnum {
  MATUTINO = 'MATUTINO',
  VESPERTINO = 'VESPERTINO', NOTURNO = 'NOTURNO'
}

export interface ClassRawEntryDto {
  subjectCode: string;
  shift?: ShiftEnum;
  className: string;
  classCode: string;
}

export const toClassRawEntryDto = (raw: any): ClassRawEntryDto => {
  return {
    subjectCode: String(raw.subjectCode),
    shift: raw.shift as ShiftEnum,
    className: String(raw.className),
    classCode: String(raw.classCode)
  };
};