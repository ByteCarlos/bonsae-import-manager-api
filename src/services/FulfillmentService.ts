import { AppDataSource } from "../connection/mysqlConnection";
import { BundleDto } from "../dtos/BundleDto";
import { AcademicClassesEntity } from "../models/entities/AcademicClassesEntity";
import { CampusEntity } from "../models/entities/CampusEntity";
import { SchoolPeriodEntity } from "../models/entities/SchoolPeriodEntity";

export class FulfillmentService {
    private schoolPeriodRepository;
    private academicClassesRepository;
    private campusRepository;

    constructor() {
        this.schoolPeriodRepository = AppDataSource.getRepository(SchoolPeriodEntity);
        this.academicClassesRepository = AppDataSource.getRepository(AcademicClassesEntity);
        this.campusRepository = AppDataSource.getRepository(CampusEntity);
    }

    private mapToEntity<T, U extends object>(source: T, target: new () => U): U {
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

    async fulfillRequirements(bundledEntries: BundleDto) {    
        const schoolPeriods: SchoolPeriodEntity[] = bundledEntries.schoolPeriods
            .map((schoolPeriod) => this.mapToEntity(schoolPeriod, SchoolPeriodEntity));
        this.schoolPeriodRepository.save(schoolPeriods);
        
        const subjects: AcademicClassesEntity[] = await Promise.all(
            bundledEntries.subjects.map(async (subject) => {
                const academicClassEntity = this.mapToEntity(subject, AcademicClassesEntity);
        
                if (subject.campus) {
                    const campusEntity = await this.findOrCreateCampus(subject.campus);
                    console.log(campusEntity);
                    academicClassEntity.campus = campusEntity;
                }                
        
                if (subject.subjectCode) {
                    const schoolPeriod = await this.schoolPeriodRepository.findOne({
                        where: { code: subject.subjectCode }
                    });
                    if (!schoolPeriod) {
                        throw new Error(`School period with ID "${subject.periodId}" not found.`);
                    }
                    academicClassEntity.schoolPeriod = schoolPeriod;
                }
        
                return academicClassEntity;
            })
        );        

        return {
            schoolPeriodsEntities: schoolPeriods,
            academicClassesEntities: await this.academicClassesRepository.save(subjects)
        };
    }
}