import { Request, Response } from 'express';
import StudentEnrollmentDocument from '../models/documents/StudentEnrollmentDocument';
import ClassDocument from '../models/documents/ClassDocument';
import SubjectDocument from '../models/documents/SubjectDocument';
import UserDocument from '../models/documents/UserDocument';

export default {
    async storeBatch(req: Request, res: Response) {
        try {
            const enrollments = await Promise.all(
                req.body.map(async (entry: any) => {
                    const [subject, classDoc, user] = await Promise.all([
                        SubjectDocument.findOne({ code: entry.subjectCode }),
                        ClassDocument.findOne({ code: entry.classCode }),
                        UserDocument.findOne({
                            $or: [
                                { email: entry.studentEmail },
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
                            `User not found (email: ${entry.studentEmail}, registration: ${entry.registrationNumber})`
                        );
                    }
            
                    return new StudentEnrollmentDocument({
                        ...entry,
                        subjectRef: subject._id,
                        classRef: classDoc._id,
                        userRef: user._id
                    });
                })
            );

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
            const [subject, classDoc, user] = await Promise.all([
                SubjectDocument.findOne({ code: enrollment.subjectCode }),
                ClassDocument.findOne({ code: enrollment.classCode }),
                UserDocument.findOne({
                    $or: [
                        { email: enrollment.studentEmail },
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
                    `User not found (email: ${enrollment.studentEmail}, registration: ${enrollment.registrationNumber})`
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