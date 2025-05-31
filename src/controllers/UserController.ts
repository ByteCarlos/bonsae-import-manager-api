import { Request, Response } from 'express';
import UserDocument from '../models/documents/UserDocument.js';
import ProcessDocument from '../models/documents/ProcessDocument.js';
import ProfessorEnrollmentDocument from '../models/documents/ProfessorEnrollmentDocument.js';
import StudentEnrollmentDocument from '../models/documents/StudentEnrollmentDocument.js';

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

            const users = data.map(user => new UserDocument({
                ...user,
                processId: processDoc.processId,
                processRef: processDoc._id
            }));

            await UserDocument.insertMany(users);
            return res.status(201).json(users);
        } catch (error) {
            console.error('Error inserting users:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async store(req: Request, res: Response) {
        try {
            const { processId } = req.body;
            const userData = req.body.data;

            const existingUser = await UserDocument.findOne({ profileId: userData.profileId, name: userData.name, processId });
            if (existingUser) {
                return res.status(409).json({ error: `User with profile ID ${userData.profileId} and name ${userData.name} already created in this process` });
            }

            const process = await ProcessDocument.findOne({ processId });
            if (!process) {
                return res.status(404).json({ error: 'Process not found' });
            }

            userData.processId = processId;
            userData.processRef = process._id;

            const user = new UserDocument(userData);
            await user.save();

            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async index(_req: Request, res: Response) {
        try {
            const users = await UserDocument.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async show(req: Request, res: Response) {
        try {
            let user;
            if (req.params.id) {
                user = await UserDocument.findOne({ processId: req.body.processId, _id: req.params.id });
            } else {
                user = await UserDocument.findOne({ profileId: req.body.profileId, name: req.body.name, processId: req.body.processId });
            }

            if (!user) return res.status(404).json({ error: 'User not found' });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async update(req: Request, res: Response) {
        try {
            const { processId, ...data } = req.body;
            const updatedUser = await UserDocument.findOneAndUpdate({ _id: req.params.id, processId: processId }, data, { new: true, runValidators: true });
            if (!updatedUser) return res.status(404).json({ error: 'User not found' });

            await ProfessorEnrollmentDocument.updateMany({ processId: processId, userRef: updatedUser?._id }, { $set: { registrationNumber: updatedUser.registrationNumber, professorEmail: updatedUser.email } });
            await StudentEnrollmentDocument.updateMany({ processId: processId, userRef: updatedUser?._id }, { $set: { registrationNumber: updatedUser.registrationNumber, studentEmail: updatedUser.email } });

            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async destroy(req: Request, res: Response) {
        try {
            let user;
            if (req.params.id) {
                user = await UserDocument.findOne({ processId: req.body.processId, _id: req.params.id });
            } else {
                user =  await UserDocument.findOneAndDelete({ profileId: req.body.profileId, name: req.body.name, processId: req.body.processId });
            }

            if (!user) return res.status(404).json({ error: 'User not found' });
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
};