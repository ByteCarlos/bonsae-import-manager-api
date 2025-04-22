import { Request, Response } from 'express';
import User from "../models/User.js";

export default {
    // Criação de documentos em lote
    async storeBatch(req: Request, res: Response) {
        try {
            const users = req.body.data.map((user: any) => new User(user));
            await User.insertMany(users);
            return res.status(201).json(users);
        } catch (error) {
            console.error('Error inserting users:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async store(req: Request, res: Response) {
        try {
            const user = new User(req.body);
            await user.save();
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async index(_req: Request, res: Response) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async show(req: Request, res: Response) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async update(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) return res.status(404).json({ error: 'User not found' });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async destroy(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};