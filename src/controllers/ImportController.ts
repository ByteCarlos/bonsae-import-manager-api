import { Request, Response } from 'express';
import SchoolPeriodDocument from '../models/documents/SchoolPeriodDocument.js';
import ClassDocument from '../models/documents/ClassDocument.js';
import UserDocument from '../models/documents/UserDocument.js';
import StudentEnrollmentDocument from '../models/documents/StudentEnrollmentDocument.js';
import ProfessorEnrollmentDocument from '../models/documents/ProfessorEnrollmentDocument.js';
import SubjectDocument from '../models/documents/SubjectDocument.js';
import { TransactionalService } from '../services/TransactionalService.js';
import { ProcessDto } from '../dtos/ProcessDto.js';
import { ProfessorEnrollmentDtoData, StudentEnrollmentDtoData } from '../dtos/EnrollmentDto.js';
import { DocumentService } from '../services/DocumentService.js';

export default {
    async saveDocumentsToTransactionalDatabase(req: Request, res: Response) {
        try {
          const processId = req.params.id;
      
          const documentService = new DocumentService();
          const processData = await documentService.bundleProcessData(processId);
      
          if (!processData) {
            return res.status(404).json({ error: `Data not found for process: ${processId}` });
          }

          const transactionalService = new TransactionalService();
          const processEntities = await transactionalService.completeImport(processData);
      
          return res.status(200).json(processEntities);
        } catch (error) {
          return res.status(500).json({ error: (error as Error).message });
        }
    },
    async saveData(req: Request, res: Response) {
        try {
            const studentEnrollments = req.body.data.data.studentsEnrollments.map(
            (studentEnrollment: StudentEnrollmentDtoData) => ({
                ...studentEnrollment,
                email: studentEnrollment.studentEmail,
                professor: false,
            })
            );

            const professorEnrollments = req.body.data.data.professorEnrollments.map(
            (professorEnrollment: ProfessorEnrollmentDtoData) => ({
                ...professorEnrollment,
                email: professorEnrollment.professorEmail,
                professor: true,
            })
            );

            const enrollments = [...studentEnrollments, ...professorEnrollments];

            const processData: ProcessDto = req.body.data.data;
            processData.enrollments = enrollments;

            const transactionalService = new TransactionalService();
            const processEntities = await transactionalService.completeImport(processData);

            return res.status(201).json(processEntities);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async import(req: Request, res: Response) {
        try {
            const { data } = req.body.data;

            let schoolPeriods: any[] = [];
            let subjects: any[] = [];
            let classes: any[] = [];
            let users: any[] = [];
            let professorEnrollments: any[] =[]
            let studentEnrollments: any[] =[]

            data.forEach((step: any) => {
                switch (step.type) {
                    case 'school_period':
                        schoolPeriods = step.data.map((schoolPeriod: any) => new SchoolPeriodDocument(schoolPeriod));
                        break;
                    case 'subject':
                        subjects = step.data.map((subject: any) => new SubjectDocument(subject));
                        break;
                    case 'class':
                        classes = step.data.map((classData: any) => new ClassDocument(classData));
                        break;
                    case 'user':
                        users = step.data.map((user: any) => new UserDocument(user));
                        break;
                    case 'professor_enrollment':
                        professorEnrollments = step.data.map((enrollment: any) => new ProfessorEnrollmentDocument(enrollment));
                        break;
                    case 'student_enrollment':
                        studentEnrollments = step.data.map((enrollment: any) => new StudentEnrollmentDocument(enrollment));
                        break;
                }
            });

            const schoolPeriodsDocs = schoolPeriods.length ? await SchoolPeriodDocument.insertMany(schoolPeriods) : [];
            const subjectDocs = subjects.length ? await SubjectDocument.insertMany(subjects) : [];
            const classDocs = classes.length ? await ClassDocument.insertMany(classes) : [];
            const userDocs = users.length ? await UserDocument.insertMany(users) : [];
            const professorEnrollmentsDocs = professorEnrollments.length ? await ProfessorEnrollmentDocument.insertMany(professorEnrollments) : [];
            const studentEnrollmentsDocs = studentEnrollments.length ? await StudentEnrollmentDocument.insertMany(studentEnrollments) : [];


            return res.status(201).json({
                message: 'Dados importados com sucesso!',
                schoolPeriods: schoolPeriodsDocs,
                subjects: subjectDocs,
                classes: classDocs,
                users: userDocs,
                professorEnrollments: professorEnrollmentsDocs,
                studentEnrollments: studentEnrollmentsDocs
            });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};