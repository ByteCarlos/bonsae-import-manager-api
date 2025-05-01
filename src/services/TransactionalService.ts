import { AppDataSource } from "../connection/mysqlConnection";
import { BundleDto } from "../dtos/BundleDto";
import { ClassRawEntryDto } from "../dtos/ClassRawEntryDto";
import { EnrollmentDto } from "../dtos/EnrollmentRawEntryDto";
import { SchoolPeriodRawEntryDto } from "../dtos/SchoolPeriodRawEntryDto";
import { SubjectRawEntryDto } from "../dtos/SubjectRawEntryDto";
import { UserProfileMap, UserRawEntryDto } from "../dtos/UserRawEntryDto";
import { AcademicClassesEntity } from "../models/entities/AcademicClassesEntity";
import { CampusEntity } from "../models/entities/CampusEntity";
import { DisciplinesEntity } from "../models/entities/DisciplinesEntity";
import { SchoolPeriodEntity } from "../models/entities/SchoolPeriodEntity";
import { UsersEntity } from "../models/entities/UsersEntity";

export class TransactionalService {
    private schoolPeriodRepository;
    private academicClassesRepository;
    private campusRepository;
    private disciplinesRepository;
    private usersRepository;

    constructor() {
        this.schoolPeriodRepository = AppDataSource.getRepository(SchoolPeriodEntity);
        this.academicClassesRepository = AppDataSource.getRepository(AcademicClassesEntity);
        this.campusRepository = AppDataSource.getRepository(CampusEntity);
        this.disciplinesRepository = AppDataSource.getRepository(DisciplinesEntity)
        this.usersRepository = AppDataSource.getRepository(UsersEntity)
    }

    private convertToEntity<T, U extends object>(source: T, target: new () => U): U {
        const result = new target();
        Object.assign(result, source);
        return result;
    }

    private async findOrCreateCampus(campusName: string): Promise<CampusEntity> {
        let campus = await this.campusRepository.findOne({ where: { name: campusName } });
    
        if (!campus) {
            campus = await this.campusRepository.save({ name: campusName });
        }
    
        return campus;
    }

    async completeImport(dataBundle: BundleDto) {
        const schoolPeriods = await this.saveSchoolPeriods(dataBundle.schoolPeriods);
        const academicClasses = await this.saveAcademicClasses(dataBundle.subjects);
        const disciplines = await this.saveDisciplines(dataBundle.classes);
        const users = await this.saveUsers(dataBundle.users);
        const disciplineUsers = await this.saveDisciplineUsers(dataBundle.enrollments)
        
        return {
            schoolPeriodsEntities: schoolPeriods,
            academicClassesEntities: academicClasses,
            disciplinesEntities: disciplines,
            usersEntities: users
        };
    }
    
    private async saveSchoolPeriods(schoolPeriods: SchoolPeriodRawEntryDto[]) {
        const entities = schoolPeriods.map((entry) =>
            this.convertToEntity(entry, SchoolPeriodEntity)
        );
        return this.schoolPeriodRepository.save(entities);
    }
    
    private async saveAcademicClasses(subjects: SubjectRawEntryDto[]) {
        const entities = await Promise.all(
            subjects.map(async (subject) => {
                const entity = this.convertToEntity(subject, AcademicClassesEntity);
    
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

    private async saveDisciplines(classes: ClassRawEntryDto[]) {
        const entities = await Promise.all(
            classes.map(async (classEntry) => {
                const entity = this.convertToEntity(classEntry, DisciplinesEntity);
    
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

    private async saveUsers(users: UserRawEntryDto[]) {
        const entities = users.map((entry) => {
            const entity = this.convertToEntity(entry, UsersEntity);
            entity.profileId = UserProfileMap[entry.profileId];
            return entity;
        });

        return this.usersRepository.save(entities);
    }

    private async saveDisciplineUsers(enrollments: EnrollmentDto[]) {
        // TODO
    }
}