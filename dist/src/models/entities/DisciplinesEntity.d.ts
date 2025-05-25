import { AcademicClassesEntity } from './AcademicClassesEntity.js';
export declare class DisciplinesEntity {
    id: number;
    academicClass: AcademicClassesEntity;
    name: string;
    code: string;
    shift: string;
    active: boolean;
    isExceptional: boolean;
    integration: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
