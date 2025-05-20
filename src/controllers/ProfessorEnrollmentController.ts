import { Request, Response } from 'express';
import ProfessorEnrollmentDocument from '../models/documents/ProfessorEnrollmentDocument';
import SubjectDocument from '../models/documents/SubjectDocument';
import ClassDocument from '../models/documents/ClassDocument';
import UserDocument from '../models/documents/UserDocument';

export default {
    async storeBatch(req: Request, res: Response) {
        try {
            const enrollments = await Promise.all(
                req.body.data.map(async (entry: any) => {            
                    const [subject, classDoc, user] = await Promise.all([
                        SubjectDocument.findOne({ code: entry.subjectCode }),
                        ClassDocument.findOne({ code: entry.classCode }),
                        UserDocument.findOne({
                            $or: [
                                { email: entry.professorEmail },
                                { registrationNumber: entry.registrationNumber }
                            ]
                        })
                    ]);
            
                    if (!subject) {
                        throw new Error(`Subject not found (code: ${entry.subjectCode})`);
                    }
            
                    if (!classDoc) {
                        throw new Error(`Class not found (code: ${entry.classCode})`);
                    }
            
                    if (!user) {
                        throw new Error(
                            `User not found (email: ${entry.professorEmail}, registration: ${entry.registrationNumber})`
                        );
                    }
            
                    return new ProfessorEnrollmentDocument({
                        ...entry,
                        subjectRef: subject._id,
                        classRef: classDoc._id,
                        userRef: user._id
                    });
                })
            );            

            await ProfessorEnrollmentDocument.insertMany(enrollments);
            return res.status(201).json(enrollments);
        } catch (error) {
            console.error('Error inserting enrollments:', error);
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async store(req: Request, res: Response) {
        try {
            const enrollment = new ProfessorEnrollmentDocument(req.body.data);
            const [subject, classDoc, user] = await Promise.all([
                SubjectDocument.findOne({ code: enrollment.subjectCode }),
                ClassDocument.findOne({ code: enrollment.classCode }),
                UserDocument.findOne({
                    $or: [
                        { email: enrollment.professorEmail },
                        { registrationNumber: enrollment.registrationNumber }
                    ]
                })
            ]);

            if (!subject) {
                throw new Error(`Subject not found (code: ${enrollment.subjectCode})`);
            }
    
            if (!classDoc) {
                throw new Error(`Class not found (code: ${enrollment.classCode})`);
            }
    
            if (!user) {
                throw new Error(
                    `User not found (email: ${enrollment.professorEmail}, registration: ${enrollment.registrationNumber})`
                );
            }

            [enrollment.subjectRef, enrollment.classRef, enrollment.userRef] = [subject._id, classDoc._id, user._id];

            await enrollment.save();
            return res.status(201).json(enrollment);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async index(_req: Request, res: Response) {
        try {
            const enrollments = await ProfessorEnrollmentDocument.find().populate('user class');
            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async show(req: Request, res: Response) {
        try {
            const enrollment = await ProfessorEnrollmentDocument.findById(req.params.id).populate('user class');
            if (!enrollment) return res.status(404).json({ error: 'Professor enrollment not found' });
            return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async update(req: Request, res: Response) {
        try {
            const enrollment = await ProfessorEnrollmentDocument.findByIdAndUpdate(req.params.id, req.body.data, { new: true });
            if (!enrollment) return res.status(404).json({ error: 'Professor enrollment not found' });
            return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async destroy(req: Request, res: Response) {
        try {
            const enrollment = await ProfessorEnrollmentDocument.findByIdAndDelete(req.params.id);
            if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
            return res.status(200).json({ message: 'Enrollment deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};