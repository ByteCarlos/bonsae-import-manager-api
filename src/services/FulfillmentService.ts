import { AppDataSource } from "../connection/mysqlConnection";
import { BundleDto } from "../dtos/BundleDto";
import { SchoolPeriodRawEntryDto } from "../dtos/SchoolPeriodRawEntryDto";
import { SchoolPeriodEntity } from "../models/entities/SchoolPeriodEntity";

export class FulfillmentService {
    schoolPeriodRepository = AppDataSource.getRepository(SchoolPeriodEntity);

    mapToEntity<T, U extends object>(source: T, target: new () => U): U {
        const result = new target();
        Object.assign(result, source);
        return result;
    }    

    fulfillRequirements = async (bundledEntries: SchoolPeriodRawEntryDto[]) => {
        console.log("bundledEntries received:", typeof bundledEntries);

        if (!Array.isArray(bundledEntries)) {
            throw new Error("Invalid bundle: schoolPeriods must be an array.");
        }
    
        const schoolPeriods: SchoolPeriodEntity[] = bundledEntries
            .map((schoolPeriod) => this.mapToEntity(schoolPeriod, SchoolPeriodEntity));
    
        await this.schoolPeriodRepository.save(schoolPeriods);
        return schoolPeriods;
    }    
}