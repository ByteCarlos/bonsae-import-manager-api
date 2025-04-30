import { Request, Response } from 'express';
import SchoolPeriodDocument from '../models/documents/SchoolPeriodDocument.js';
import { SchoolPeriodRawEntry, toSchoolPeriodRawEntry } from '../dtos/SchoolPeriodRawEntryDto.js';
import { SchoolPeriodEntity } from '../models/entities/SchoolPeriodEntity.js';
import { AppDataSource } from '../connection/mysqlConnection.js';

export default {

    async persistSchoolPeriod(req: Request, res: Response) {
        const schoolPeriodData = req.body.data.map((schoolPeriod: any) => toSchoolPeriodRawEntry(schoolPeriod));
    
        const schoolPeriods = schoolPeriodData.map((schoolPeriod: SchoolPeriodRawEntry) => {
            let sp = new SchoolPeriodEntity();
            sp.name = schoolPeriod.name;
            sp.code = schoolPeriod.code;
            sp.startDate = schoolPeriod.startDate;
            sp.endDate = schoolPeriod.endDate;
            return sp;
        });
    
        try {
            const schoolPeriodRepository = AppDataSource.getRepository(SchoolPeriodEntity);
            await schoolPeriodRepository.save(schoolPeriods);
    
            return res.status(201).json(schoolPeriods);
        } catch (error) {
            console.error('Error inserting school periods:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async storeBatch(req: Request, res: Response) {
        try {
            const schoolPeriods = req.body.map((schoolPeriod: any) => new SchoolPeriodDocument(schoolPeriod));
            await SchoolPeriodDocument.insertMany(schoolPeriods);
            return res.status(201).json(schoolPeriods);
        } catch (error) {
            console.error('Error inserting school periods:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async store(req: Request, res: Response) {
        try {
            const schoolPeriod = new SchoolPeriodDocument(req.body);
            await schoolPeriod.save();
            return res.status(201).json(schoolPeriod);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async index(_req: Request, res: Response) {
        try {
            const schoolPeriods = await SchoolPeriodDocument.find();
            return res.status(200).json(schoolPeriods);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async show(req: Request, res: Response) {
        try {
            const schoolPeriod = await SchoolPeriodDocument.findById(req.params.id);
            if (!schoolPeriod) return res.status(404).json({ error: 'School period not found' });
            return res.status(200).json(schoolPeriod);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const schoolPeriod = await SchoolPeriodDocument.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!schoolPeriod) return res.status(404).json({ error: 'School period not found' });
            return res.status(200).json(schoolPeriod);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async destroy(req: Request, res: Response) {
        try {
            const schoolPeriod = await SchoolPeriodDocument.findByIdAndDelete(req.params.id);
            if (!schoolPeriod) return res.status(404).json({ error: 'School period not found' });
            return res.status(200).json({ message: 'School period deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};