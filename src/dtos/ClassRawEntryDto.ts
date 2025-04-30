export enum shiftEnum {
  MATUTINO = 'MATUTINO',
  VESPERTINO = 'VESPERTINO', NOTURNO = 'NOTURNO'
}

export interface ClassRawEntryDto {
  subjectCode: string;
  shift?: 'MATUTINO' | 'VESPERTINO' | 'NOTURNO';
  className: string;
  classCode: string;
}

export const toClassRawEntryDto = (raw: any): ClassRawEntryDto => {
  return {
    subjectCode: String(raw.subjectCode),
    shift: raw.shift as shiftEnum,
    className: String(raw.className),
    classCode: String(raw.classCode)
  };
};