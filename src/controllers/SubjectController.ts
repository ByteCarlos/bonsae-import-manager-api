import { Request, Response } from 'express';
import SubjectDocument from '../models/documents/SubjectDocument';
//import { SubjectRawEntry, toSubjectRawEntry } from '../dtos/SubjectRawEntry.js';

export default {
    /*async persistSubject(req: Request, res: Response) {
        const subjectData = req.body.data.map((subject: any) => toSubjectRawEntry(subject));
    
        const subject = subjectData.map((subject: SubjectRawEntry) => {
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
    },*/
    async storeBatch(req: Request, res: Response) {
        try {
            const subjects = req.body.map((subject: any) => new SubjectDocument(subject));
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