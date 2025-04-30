import { Request, Response } from 'express';
import StudentEnrollmentDocument from '../models/documents/StudentEnrollmentDocument';

export default {
    async storeBatch(req: Request, res: Response) {
        try {
            const enrollments = req.body.map((enrollment: any) => new StudentEnrollmentDocument(enrollment));
            await StudentEnrollmentDocument.insertMany(enrollments);
            return res.status(201).json(enrollments);
        } catch (error) {
            console.error('Error inserting enrollments:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async store(req: Request, res: Response) {
        try {
            const enrollment = new StudentEnrollmentDocument(req.body);
            await enrollment.save();
            return res.status(201).json(enrollment);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async index(_req: Request, res: Response) {
        try {
            const enrollments = await StudentEnrollmentDocument.find().populate('user class');
            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async show(req: Request, res: Response) {
        try {
            const enrollment = await StudentEnrollmentDocument.findById(req.params.id).populate('user class');
            if (!enrollment) return res.status(404).json({ error: 'Student enrollment not found' });
            return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async update(req: Request, res: Response) {
        try {
            const enrollment = await StudentEnrollmentDocument.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!enrollment) return res.status(404).json({ error: 'Student enrollment not found' });
            return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async destroy(req: Request, res: Response) {
        try {
            const enrollment = await StudentEnrollmentDocument.findByIdAndDelete(req.params.id);
            if (!enrollment) return res.status(404).json({ error: 'Student enrollment not found' });
            return res.status(200).json({ message: 'Student enrollment deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};