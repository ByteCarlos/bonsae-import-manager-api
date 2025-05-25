import { Period } from '../../dtos/SchoolPeriodDto.js';
export declare class SchoolPeriodEntity {
    id: number;
    name: Period;
    code: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
