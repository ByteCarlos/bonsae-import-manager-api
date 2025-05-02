import { Request, Response } from 'express';
import SubjectDocument from '../models/documents/SubjectDocument';
import SchoolPeriodDocument from '../models/documents/SchoolPeriodDocument';

export default {
    async storeBatch(req: Request, res: Response) {
        try {
            const subjects = await Promise.all(
                req.body.map(async (subjectEntry: any) => {
                    const schoolPeriodDocument = await SchoolPeriodDocument.findOne({ code: subjectEntry.periodId });
    
                    if (!schoolPeriodDocument) {
                        throw new Error(`School Period not found for code: ${subjectEntry.periodId}`);
                    }
    
                    return new SubjectDocument({
                        ...subjectEntry,
                        schoolPeriodRef: schoolPeriodDocument._id,
                    });
                })
            );

            await SubjectDocument.insertMany(subjects);
            return res.status(201).json(subjects);
        } catch (error) {
            console.error('Error inserting subjects:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async store(req: Request, res: Response) {
        try {
            const subject = new SubjectDocument(req.body);
            const schoolPeriod = await SchoolPeriodDocument.findOne({ code: subject.periodId });
            
            if (!schoolPeriod) {
                throw new Error(`School Period not found for code: ${subject.periodId}`);
            }
            subject.schoolPeriodRef = schoolPeriod._id;            

            await subject.save();
            return res.status(201).json(subject);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async index(_req: Request, res: Response) {
        try {
            const subjects = await SubjectDocument.find();
            return res.status(200).json(subjects);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async show(req: Request, res: Response) {
        try {
            const subject = await SubjectDocument.findById(req.params.id);
            if (!subject) return res.status(404).json({ error: 'Subject not found' });
            return res.status(200).json(subject);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async update(req: Request, res: Response) {
        try {
            const subject = await SubjectDocument.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!subject) return res.status(404).json({ error: 'Subject not found' });
            return res.status(200).json(subject);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async destroy(req: Request, res: Response) {
        try {
            const subject = await SubjectDocument.findByIdAndDelete(req.params.id);
            if (!subject) return res.status(404).json({ error: 'Subject not found' });
            return res.status(200).json({ message: 'Subject deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};