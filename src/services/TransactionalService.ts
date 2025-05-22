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
        const entities = schoolPeriods.map((entry) => {
            let entity = new SchoolPeriodEntity();
            Object.assign(entity, {
                code: entry.code,
                name: entry.name,
                startData: entry.startDate,
                endDate: entry.endDate
            });

            return entity;
        });
        return this.schoolPeriodRepository.save(entities);
    }
    
    private async saveAcademicClasses(subjects: SubjectDtoData[]) {
        const entities = await Promise.all(
            subjects.map(async (subject) => {
                const entity = new AcademicClassesEntity();
                Object.assign(entity, {
                    name: subject.name ?? '',
                    code: subject.code,
                    startDate: subject.startDate,
                    endDate: subject.endDate,
                    category: subject.category,
                    period: subject.period ?? '',
                    active: subject.state
                });
    
                if (subject.campus) {
                    entity.campus = await this.findOrCreateCampus(subject.campus);
                }
    
                if (subject.periodId) {
                    const schoolPeriod = await this.schoolPeriodRepository.findOne({
                        where: { code: subject.periodId }
                    });
    
                    if (!schoolPeriod) {
                        throw new Error(`School period with id "${subject.periodId}" not found.`);
                    }
    
                    entity.schoolPeriod = schoolPeriod;
                }
    
                return entity;
            })
        );
    
        return this.academicClassesRepository.save(entities);
    }

    private async saveDisciplines(classes: ClassDtoData[]) {
        const entities = await Promise.all(
            classes.map(async (classEntry) => {
                const entity = new DisciplinesEntity();
                Object.assign(entity, {
                    name: classEntry.name,
                    code: classEntry.code,
                    shift: classEntry.shift
                });
    
                if (classEntry.subjectCode) {
                    const academicClass = await this.academicClassesRepository.findOne({
                        where: { code: classEntry.subjectCode },
                        relations: ['schoolPeriod']
                    });
    
                    if (!academicClass) {
                        throw new Error(`Academic class not found for code: "${classEntry.subjectCode}"`);
                    }
    
                    entity.academicClass = academicClass;
                    entity.schoolPeriod = academicClass.schoolPeriod;
                }
                
                return entity;
            })
        );
    
        return this.disciplinesRepository.save(entities);
    }

    private async saveUsers(users: UserDtoData[]) {
        const entities = users.map((entry) => {
            const entity = new UsersEntity();
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
                active: true,
            });

            entity.profileId = UserProfileMap[entry.profileId];
            return entity;
        });

        return this.usersRepository.save(entities);
    }

    private async saveDisciplineUsers(enrollments: EnrollmentDtoData[]) {
        const entities = await Promise.all(
            enrollments.map(async (enrollment) => {
                const entity = new DisciplineUsersEntity();
                Object.assign(entity, {
                    professor: enrollment.professor,
                });
                
                if (enrollment.registrationNumber || enrollment.email) {
                    const user = await this.usersRepository.findOne({
                        where: [
                            { registrationNumber: enrollment.registrationNumber },
                            { email: enrollment.email }
                        ]
                    });              
                    console.log(user);      
                        
                    if (!user) {
                        throw new Error(`User not found for registration number "${enrollment.registrationNumber}" and email ${enrollment.email}`);
                    }

                    entity.user = user;
                }

                if (enrollment.classCode) {
                    const discipline = await this.disciplinesRepository.findOne(({
                        where: { code: enrollment.classCode }
                    }));

                    if (!discipline) {
                        throw new Error(`Discipline not found for class code "${enrollment.classCode}"`);
                    }

                    entity.discipline = discipline;
                }
    
                return this.disciplineUsersRepository.save(entity);
            })
        );
    
        return this.disciplinesRepository.save(entities);
    }
}