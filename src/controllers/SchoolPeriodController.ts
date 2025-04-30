import { Request, Response } from 'express';
import SchoolPeriodDocument from '../models/documents/SchoolPeriodDocument.js';

export default {
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