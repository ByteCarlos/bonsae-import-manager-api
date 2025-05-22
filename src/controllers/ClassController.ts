import { Request, Response } from 'express';
import ClassDocument from '../models/documents/ClassDocument.js';
import SubjectDocument from '../models/documents/SubjectDocument.js';
import ProcessDocument from '../models/documents/ProcessDocument.js';
import { ClassDtoData } from '../dtos/ClassDto.js';

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
            
            const classes = await Promise.all(
                req.body.data.map(async (classEntry: ClassDtoData) => {
                    const subjectDocument = await SubjectDocument.findOne({ code: classEntry.subjectCode });
    
                    if (!subjectDocument) {
                        throw new Error(`Subject not found for code: ${classEntry.subjectCode}`);
                    }
    
                    return new ClassDocument({
                        ...classEntry,
                        subjectRef: subjectDocument._id,
                        processId: processDoc.processId,
                        processRef: processDoc._id
                    });
                })
            );

            await ClassDocument.insertMany(classes);
            return res.status(201).json(classes);
        } catch (error) {
            console.error('Error inserting classes:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async store(req: Request, res: Response) {
        try {
            const { processId } = req.body;
            const classData = req.body.data;

            const existingClass = await ClassDocument.findOne({ code: classData.code, processId });
            if (existingClass) {
                return res.status(409).json({ error: `Class ${classData.code} already created in this process` });
            }

            const process = await ProcessDocument.findOne({ processId });
            if (!process) {
                return res.status(404).json({ error: 'Process not found' });
            }
            classData.processId = processId;
            classData.processRef = process._id;

            const classDoc = new ClassDocument(classData);

            const subjectDoc = await SubjectDocument.findOne({ code: classDoc.subjectCode });
            if (!subjectDoc) {
                throw new Error(`Subject not found for code: ${classDoc.subjectCode}`);
            }
            classDoc.subjectRef = subjectDoc._id;     
            
            await classDoc.save();
            return res.status(201).json(classDoc);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message }); 
        }
    },

    async index(_req: Request, res: Response) {
        try {
            const classes = await ClassDocument.find().populate('subjectRef');
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async show(req: Request, res: Response) {
        try { 
            const classData = await ClassDocument.findOne({ code: req.params.id, processId: req.body.processId });
            if (!classData) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json(classData);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const { processId, subjectCode, ...data } = req.body;

            if (subjectCode) {
                const subject = await SubjectDocument.findOne({ code: subjectCode, processId: processId });
                if (!subject) return res.status(404).json({ error: 'Subject not found' });

                data.subjectCode = subjectCode;
                data.subjectRef = subject._id;
            }

            const updatedClass = await ClassDocument.findOneAndUpdate(
                { code: req.params.id, processId: processId },
                data,
                { new: true, runValidators: true }
            );
            if (!updatedClass) return res.status(404).json({ error: 'Class not found' });

            return res.status(200).json(updatedClass);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },

    async destroy(req: Request, res: Response) {
        try {
            const classData = await ClassDocument.findOneAndDelete({ code: req.params.id, processId: req.body.processId });
            if (!classData) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json({ message: 'Class deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};
