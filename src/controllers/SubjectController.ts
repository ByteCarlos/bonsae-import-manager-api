import { Request, Response } from 'express';
import Subject from "../models/Subject.js";

export default {
    // Criação de documentos em lote
    async storeBatch(req: Request, res: Response) {
        try {
            const subjects = req.body.data.map((subject: any) => new Subject(subject));
            await Subject.insertMany(subjects);
            return res.status(201).json(subjects);
        } catch (error) {
            console.error('Error inserting subjects:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async store(req: Request, res: Response) {
        try {
            const subject = new Subject(req.body);
            await subject.save();
            return res.status(201).json(subject);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async index(_req: Request, res: Response) {
        try {
            const subjects = await Subject.find();
            return res.status(200).json(subjects);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async show(req: Request, res: Response) {
        try {
            const subject = await Subject.findById(req.params.id);
            if (!subject) return res.status(404).json({ error: 'Subject not found' });
            return res.status(200).json(subject);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async update(req: Request, res: Response) {
        try {
            const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!subject) return res.status(404).json({ error: 'Subject not found' });
            return res.status(200).json(subject);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async destroy(req: Request, res: Response) {
        try {
            const subject = await Subject.findByIdAndDelete(req.params.id);
            if (!subject) return res.status(404).json({ error: 'Subject not found' });
            return res.status(200).json({ message: 'Subject deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};