import { Request, Response } from 'express';
import SchoolPeriodDocument from '../models/documents/SchoolPeriodDocument.js';
import ProcessDocument from '../models/documents/ProcessDocument.js';
import { SchoolPeriodDtoData } from '../dtos/SchoolPeriodDto.js';

export default {
    async storeBatch(req: Request, res: Response) {
        try {
        const { processId, data } = req.body;

        if (!processId || !Array.isArray(data)) {
            return res.status(400).json({ error: "Missing or invalid 'processId' or 'data' in request body" });
        }

        const processDoc = await ProcessDocument.findOne({ processId });
        if (!processDoc) {
            return res.status(404).json({ error: "Process not found" });
        }

        const schoolPeriods = data.map((schoolPeriod: SchoolPeriodDtoData) => {
            const schoolPeriodDoc = new SchoolPeriodDocument({
            ...schoolPeriod,
            processId: processDoc.processId,
            processRef: processDoc._id
            });
            return schoolPeriodDoc;
        });

        await SchoolPeriodDocument.insertMany(schoolPeriods);
        return res.status(201).json(schoolPeriods);
        } catch (error) {
        console.error("Error inserting school periods:", error);
        return res.status(500).json({ error: (error as Error).message });
        }
    },

    async store(req: Request, res: Response) {
        try {
            const schoolPeriod = new SchoolPeriodDocument(req.body.data);
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
            const schoolPeriod = await SchoolPeriodDocument.findByIdAndUpdate(req.params.id, req.body.data, { new: true });
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