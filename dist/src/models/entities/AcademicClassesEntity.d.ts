import { SchoolPeriodEntity } from './SchoolPeriodEntity.js';
import { CampusEntity } from './CampusEntity.js';
export declare class AcademicClassesEntity {
    id: number;
    schoolPeriod: SchoolPeriodEntity;
    name: string;
    code: string;
    startDate: Date;
    endDate: Date;
    category: string;
    course: string;
    active: boolean;
    isExceptional: boolean;
    period: string;
    campus: CampusEntity;
    integration: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
