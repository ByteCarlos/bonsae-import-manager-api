import { AppDataSource } from "../connection/mysqlConnection";
import { ProcessDto } from "../dtos/ProcessDto";
import { ClassDtoData } from "../dtos/ClassDto";
import { EnrollmentDtoData } from "../dtos/EnrollmentDto";
import { SchoolPeriodDtoData } from "../dtos/SchoolPeriodDto";
import { SubjectDtoData } from "../dtos/SubjectDto";
import { UserDtoData, UserProfileMap } from "../dtos/UserDto";
import { AcademicClassesEntity } from "../models/entities/AcademicClassesEntity";
import { CampusEntity } from "../models/entities/CampusEntity";
import { DisciplinesEntity } from "../models/entities/DisciplinesEntity";
import { DisciplineUsersEntity } from "../models/entities/DisciplineUsersEntity";
import { SchoolPeriodEntity } from "../models/entities/SchoolPeriodEntity";
import { UsersEntity } from "../models/entities/UsersEntity";

export class TransactionalService {
    private schoolPeriodRepository;
    private academicClassesRepository;
    private campusRepository;
    private disciplinesRepository;
    private usersRepository;
    private disciplineUsersRepository;

    constructor() {
        this.schoolPeriodRepository = AppDataSource.getRepository(SchoolPeriodEntity);
        this.academicClassesRepository = AppDataSource.getRepository(AcademicClassesEntity);
        this.campusRepository = AppDataSource.getRepository(CampusEntity);
        this.disciplinesRepository = AppDataSource.getRepository(DisciplinesEntity)
        this.usersRepository = AppDataSource.getRepository(UsersEntity);
        this.disciplineUsersRepository = AppDataSource.getRepository(DisciplineUsersEntity);
    }

    private async findOrCreateCampus(campusName: string): Promise<CampusEntity> {
        let campus = await this.campusRepository.findOne({ where: { name: campusName } });
    
        if (!campus) {
            campus = await this.campusRepository.save({ name: campusName });
        }
    
        return campus;
    }

    async completeImport(processData: ProcessDto) {
        const schoolPeriods = await this.saveSchoolPeriods(processData.schoolPeriods);
        const academicClasses = await this.saveAcademicClasses(processData.subjects);
        const disciplines = await this.saveDisciplines(processData.classes);
        const users = await this.saveUsers(processData.users);
        const disciplineUsers = await this.saveDisciplineUsers(processData.enrollments)
        
        return {
            schoolPeriodsEntities: schoolPeriods,
            academicClassesEntities: academicClasses,
            disciplinesEntities: disciplines,
            usersEntities: users,
            disciplineUsersEntities: disciplineUsers
        };
    }
    
    private async saveSchoolPeriods(schoolPeriods: SchoolPeriodDtoData[]) {
        const entities = await Promise.all(schoolPeriods.map(async (entry) => {
            let entity = await this.schoolPeriodRepository.findOne({ where: { code: entry.code } });
            if (entity) {
                return entity;
            }

            entity = new SchoolPeriodEntity();
            Object.assign(entity, {
                code: entry.code,
                name: entry.name,
                startDate: entry.startDate,
                endDate: entry.endDate
            });

            return this.schoolPeriodRepository.save(entity);
        }));
        return entities;
    }
    
    private async saveAcademicClasses(subjects: SubjectDtoData[]) {
        const entities = await Promise.all(
            subjects.map(async (entry) => {
                let entity = await this.academicClassesRepository.findOne({ where: { code: entry.code }});
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
                    entity.campus = await this.findOrCreateCampus(entry.campus);
                }
    
                if (entry.periodId) {
                    const schoolPeriod = await this.schoolPeriodRepository.findOne({
                        where: { code: entry.periodId }
                    });
    
                    if (!schoolPeriod) {
                        throw new Error(`School period with id "${entry.periodId}" not found.`);
                    }
    
                    entity.schoolPeriod = schoolPeriod;
                }
    
                return this.academicClassesRepository.save(entity);
            })
        );
    
        return entities;
    }

    private async saveDisciplines(classes: ClassDtoData[]) {
        const entities = await Promise.all(
            classes.map(async (entry) => {
                let entity = await this.disciplinesRepository.findOne({ where: { code: entry.code }});
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
                    const academicClass = await this.academicClassesRepository.findOne({
                        where: { code: entry.subjectCode }
                    });
    
                    if (!academicClass) {
                        throw new Error(`Academic class not found for code: "${entry.subjectCode}"`);
                    }
    
                    entity.academicClass = academicClass;
                }
                
                return this.disciplinesRepository.save(entity);
            })
        );
    
        return entities;
    }

    private async saveUsers(users: UserDtoData[]) {
        const entities = await Promise.all(users.map(async (entry) => {
            let entity = await this.usersRepository.findOne({
                where: {
                    profileId: UserProfileMap[entry.profileId],
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
                profileId: UserProfileMap[entry.profileId],
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

            return this.usersRepository.save(entity);
        }));

        return entities;
    }

    private async saveDisciplineUsers(enrollments: EnrollmentDtoData[]) {
        const entities = await Promise.all(
            enrollments.map(async (entry) => {
                const entity = new DisciplineUsersEntity();
                Object.assign(entity, {
                    professor: entry.professor,
                });
                
                if (entry.registrationNumber || entry.email) {
                    const user = await this.usersRepository.findOne({
                        where: [
                            { registrationNumber: entry.registrationNumber },
                            { email: entry.email }
                        ]
                    });              
                    console.log(user);      
                        
                    if (!user) {
                        throw new Error(`User not found for registration number "${entry.registrationNumber}" and email ${entry.email}`);
                    }

                    entity.user = user;
                }

                if (entry.classCode) {
                    const discipline = await this.disciplinesRepository.findOne(({
                        where: { code: entry.classCode }
                    }));

                    if (!discipline) {
                        throw new Error(`Discipline not found for class code "${entry.classCode}"`);
                    }

                    entity.discipline = discipline;
                }

                let existingEntity = await this.disciplineUsersRepository.findOne({
                    where: {
                        user: entity.user,
                        discipline: entity.discipline
                    }
                });

                if (existingEntity) {
                    return existingEntity;
                }

                return this.disciplineUsersRepository.save(entity);
            })
        );
    
        return entities;
    }
}