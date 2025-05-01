export enum ShiftEnum {
  MATUTINO = 'MATUTINO',
  VESPERTINO = 'VESPERTINO', 
  NOTURNO = 'NOTURNO'
}

export interface ClassRawEntryDto {
  subjectCode: string;
  shift?: ShiftEnum;
  name: string;
  code: string;
}