import { Request, Response } from 'express';
import SubjectDocument from '../models/documents/SubjectDocument';
import SchoolPeriodDocument from '../models/documents/SchoolPeriodDocument';
import ProcessDocument from '../models/documents/ProcessDocument';
import { SubjectDtoData } from '../dtos/SubjectDto';
import ClassDocument from '../models/documents/ClassDocument';
import ProfessorEnrollmentDocument from '../models/documents/ProfessorEnrollmentDocument';
import StudentEnrollmentDocument from '../models/documents/StudentEnrollmentDocument';

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

            const subjects = await Promise.all(
                req.body.data.map(async (subjectEntry: SubjectDtoData) => {
                    const schoolPeriodDocument = await SchoolPeriodDocument.findOne({ code: subjectEntry.periodId, processId: processId });
    
                    if (!schoolPeriodDocument) {
                        throw new Error(`School Period not found for code: ${subjectEntry.periodId}`);
                    }
    
                    return new SubjectDocument({
                        ...subjectEntry,
                        schoolPeriodRef: schoolPeriodDocument._id,
                        processId: processId,
                        processRef: processDoc._id
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
            const { processId } = req.body;
            const subjectData = req.body.data;

            const existingSubject = await SubjectDocument.findOne({ code: subjectData.code, processId });
            if (existingSubject) {
                return res.status(409).json({ error: `Subject ${subjectData.code} already created in this process` });
            }

            const process = await ProcessDocument.findOne({ processId });
            if (!process) {
            return res.status(404).json({ error: 'Process not found' });
            }
            subjectData.processId = processId;
            subjectData.processRef = process._id;

            const subject = new SubjectDocument(subjectData);

            const schoolPeriod = await SchoolPeriodDocument.findOne({ code: subject.periodId, processId: processId });
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
            const subjects = await SubjectDocument.find().populate('schoolPeriodRef');
            return res.status(200).json(subjects);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async show(req: Request, res: Response) {
        try {
            const subject = await SubjectDocument.findOne({ code: req.params.id, processId: req.body.processId });
            if (!subject) return res.status(404).json({ error: 'Subject not found' });
            return res.status(200).json(subject);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async update(req: Request, res: Response) {
        try {
            const { processId, periodId, ...data } = req.body;

            if (periodId) {
                const schoolPeriod = await SchoolPeriodDocument.findOne({ code: periodId, processId: processId });
                if (!schoolPeriod) return res.status(404).json({ error: 'SchoolPeriod not found' });

                data.periodId = periodId;
                data.schoolPeriodRef = schoolPeriod._id;
            }

            const updatedSubject = await SubjectDocument.findOneAndUpdate(
                { code: req.params.id, processId: processId },
                data,
                { new: true, runValidators: true }
            );
            if (!updatedSubject) return res.status(404).json({ error: 'Subject not found' });

            if (updatedSubject.code != req.params.id) {
                await ClassDocument.updateMany({ processId: processId, subjectRef: updatedSubject?._id }, { $set: { subjectCode: updatedSubject.code } });
                await ProfessorEnrollmentDocument.updateMany({ processId: processId, subjectRef: updatedSubject?._id }, { $set: { subjectCode: updatedSubject.code } });
                await StudentEnrollmentDocument.updateMany({ processId: processId, subjectRef: updatedSubject?._id }, { $set: { subjectCode: updatedSubject.code } });
            }

            return res.status(200).json(updatedSubject);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async destroy(req: Request, res: Response) {
        try {
            const subject = await SubjectDocument.findOneAndDelete({ code: req.params.id, processId: req.body.processId });
            if (!subject) return res.status(404).json({ error: 'Subject not found' });
            return res.status(200).json({ message: 'Subject deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};