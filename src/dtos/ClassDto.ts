export enum ShiftEnum {
  MATUTINO = 'MATUTINO',
  VESPERTINO = 'VESPERTINO', 
  NOTURNO = 'NOTURNO'
}

export interface ClassDto {
  processId: string;
  data: ClassDtoData
}

export interface ClassDtoData {
  subjectCode: string;
  shift?: ShiftEnum;
  name: string;
  code: string;
}