import { UserProfileMap } from "../dtos/UserDto.js";
import { AcademicClassesEntity } from "../models/entities/AcademicClassesEntity.js";
import { CampusEntity } from "../models/entities/CampusEntity.js";
import { DisciplinesEntity } from "../models/entities/DisciplinesEntity.js";
import { DisciplineUsersEntity } from "../models/entities/DisciplineUsersEntity.js";
import { SchoolPeriodEntity } from "../models/entities/SchoolPeriodEntity.js";
import { UsersEntity } from "../models/entities/UsersEntity.js";
export class TransactionalService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async completeImport(processData) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const schoolPeriods = await this.saveSchoolPeriods(processData.schoolPeriods, queryRunner.manager);
            const academicClasses = await this.saveAcademicClasses(processData.subjects, queryRunner.manager);
            const disciplines = await this.saveDisciplines(processData.classes, queryRunner.manager);
            const users = await this.saveUsers(processData.users, queryRunner.manager);
            const disciplineUsers = await this.saveDisciplineUsers(processData.enrollments, queryRunner.manager);
            await queryRunner.commitTransaction();
            return {
                schoolPeriodsEntities: schoolPeriods,
                academicClassesEntities: academicClasses,
                disciplinesEntities: disciplines,
                usersEntities: users,
                disciplineUsersEntities: disciplineUsers
            };
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            console.error('Error persisting data, transaction rolled back:', error);
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async saveSchoolPeriods(schoolPeriods, manager) {
        const entities = await Promise.all(schoolPeriods.map(async (entry) => {
            let entity = await manager.findOne(SchoolPeriodEntity, { where: { code: entry.code } });
            if (entity) {
                return entity;
            }
            entity = new SchoolPeriodEntity();
            Object.assign(entity, {
                code: entry.code,
                name: entry.name,
                startDate: entry.startDate,
                endDate: entry.endDate,
            });
            return manager.save(SchoolPeriodEntity, entity);
        }));
        return entities;
    }
    async findOrCreateCampus(campusName, manager) {
        let campus = await manager.findOne(CampusEntity, { where: { name: campusName } });
        if (!campus) {
            campus = await manager.save(CampusEntity, { name: campusName });
        }
        return campus;
    }
    async saveAcademicClasses(subjects, manager) {
        const entities = await Promise.all(subjects.map(async (entry) => {
            let entity = await manager.findOne(AcademicClassesEntity, { where: { code: entry.code } });
            if (entity) {
                return entity;
            }
            entity = new AcademicClassesEntity();
            Object.assign(entity, {
                name: entry.name ?? '',
                code: entry.code,
                startDate: entry.startDate,
                endDate: entry.endDate,
                category: entry.category,
                period: entry.period ?? '',
                active: entry.state
            });
            if (entry.campus) {
                entity.campus = await this.findOrCreateCampus('Main Campus', manager);
            }
            if (entry.periodId) {
                const schoolPeriod = await manager.findOne(SchoolPeriodEntity, {
                    where: { code: entry.periodId }
                });
                if (!schoolPeriod) {
                    throw new Error(`School period with id "${entry.periodId}" not found.`);
                }
                entity.schoolPeriod = schoolPeriod;
            }
            return manager.save(AcademicClassesEntity, entity);
        }));
        return entities;
    }
    async saveDisciplines(classes, manager) {
        const entities = await Promise.all(classes.map(async (entry) => {
            let entity = await manager.findOne(DisciplinesEntity, { where: { code: entry.code } });
            if (entity) {
                return entity;
            }
            entity = new DisciplinesEntity();
            Object.assign(entity, {
                name: entry.name,
                code: entry.code,
                shift: entry.shift
            });
            if (entry.subjectCode) {
                const academicClass = await manager.findOne(AcademicClassesEntity, {
                    where: { code: entry.subjectCode }
                });
                if (!academicClass) {
                    throw new Error(`Academic class not found for code: "${entry.subjectCode}"`);
                }
                entity.academicClass = academicClass;
            }
            return manager.save(DisciplinesEntity, entity);
        }));
        return entities;
    }
    async saveUsers(users, manager) {
        const entities = await Promise.all(users.map(async (entry) => {
            const profileId = UserProfileMap[entry.profileId];
            let entity = await manager.findOne(UsersEntity, {
                where: {
                    profileId,
                    name: entry.name,
                    registrationNumber: entry.registrationNumber,
                    email: entry.email
                }
            });
            if (entity) {
                return entity;
            }
            entity = new UsersEntity();
            Object.assign(entity, {
                profileId,
                name: entry.name,
                oab: entry.oab ?? null,
                oabUf: entry.oabUf ?? null,
                email: entry.email,
                registrationNumber: entry.registrationNumber ?? null,
                telephone: entry.telephone ?? null,
                cpf: entry.cpf,
                password: entry.password,
                periodId: entry.periodId ?? null,
                observations: entry.observations ?? null,
                active: true
            });
            return manager.save(UsersEntity, entity);
        }));
        return entities;
    }
    async saveDisciplineUsers(enrollments, manager) {
        const entities = await Promise.all(enrollments.map(async (entry) => {
            const entity = new DisciplineUsersEntity();
            Object.assign(entity, {
                professor: entry.professor,
            });
            if (entry.registrationNumber || entry.email) {
                const user = await manager.findOne(UsersEntity, {
                    where: [
                        { registrationNumber: entry.registrationNumber },
                        { email: entry.email }
                    ]
                });
                if (!user) {
                    throw new Error(`User not found for registration number "${entry.registrationNumber}" and email "${entry.email}"`);
                }
                entity.user = user;
            }
            if (entry.classCode) {
                const discipline = await manager.findOne(DisciplinesEntity, {
                    where: { code: entry.classCode }
                });
                if (!discipline) {
                    throw new Error(`Discipline not found for class code "${entry.classCode}"`);
                }
                entity.discipline = discipline;
            }
            const existingEntity = await manager.findOne(DisciplineUsersEntity, {
                where: {
                    user: entity.user,
                    discipline: entity.discipline
                }
            });
            if (existingEntity) {
                return existingEntity;
            }
            return manager.save(DisciplineUsersEntity, entity);
        }));
        return entities;
    }
}
//# sourceMappingURL=TransactionalService.js.map