import { ProcessDto } from "../dtos/ProcessDto.js";
import { AcademicClassesEntity } from "../models/entities/AcademicClassesEntity.js";
import { DisciplinesEntity } from "../models/entities/DisciplinesEntity.js";
import { DisciplineUsersEntity } from "../models/entities/DisciplineUsersEntity.js";
import { SchoolPeriodEntity } from "../models/entities/SchoolPeriodEntity.js";
import { UsersEntity } from "../models/entities/UsersEntity.js";
import { DataSource } from "typeorm";
export declare class TransactionalService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    completeImport(processData: ProcessDto): Promise<{
        schoolPeriodsEntities: SchoolPeriodEntity;
        academicClassesEntities: AcademicClassesEntity[];
        disciplinesEntities: DisciplinesEntity[];
        usersEntities: UsersEntity[];
        disciplineUsersEntities: DisciplineUsersEntity[];
    }>;
    private saveSchoolPeriod;
    private findOrCreateCampus;
    private saveAcademicClasses;
    private saveDisciplines;
    private saveUsers;
    private saveDisciplineUsers;
}
