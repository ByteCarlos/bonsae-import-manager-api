import { Request, Response } from 'express';
import Period from '../models/Period.js';

export default {
    async store(req: Request, res: Response) {
        try {
            const semester = new Period(req.body);
            await semester.save();
            return res.status(201).json(semester);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async index(_req: Request, res: Response) {
        try {
            const semesters = await Period.find();
            return res.status(200).json(semesters);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async show(req: Request, res: Response) {
        try {
            const semester = await Period.findById(req.params.id);
            if (!semester) return res.status(404).json({ error: 'Semester not found' });
            return res.status(200).json(semester);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const semester = await Period.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!semester) return res.status(404).json({ error: 'Semester not found' });
            return res.status(200).json(semester);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async destroy(req: Request, res: Response) {
        try {
            const semester = await Period.findByIdAndDelete(req.params.id);
            if (!semester) return res.status(404).json({ error: 'Semester not found' });
            return res.status(200).json({ message: 'Semester deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};