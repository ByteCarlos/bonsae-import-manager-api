import { Request, Response } from 'express';
import Class from '../models/AcademicClass.js'

export default {
    async store(req: Request, res: Response) {
        try {
            const classData = new Class(req.body);
            await classData.save();
            return res.status(201).json(classData);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message }); 
        }
    },

    async index(_req: Request, res: Response) {
        try {
            const classes = await Class.find().populate('subject');
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async show(req: Request, res: Response) {
        try { 
            const classData = await Class.findById(req.params.id);
            if (!classData) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json(classData);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const classData = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!classData) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json(classData);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async destroy(req: Request, res: Response) {
        try {
            const classData = await Class.findByIdAndDelete(req.params.id);
            if (!classData) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json({ message: 'Class deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};
