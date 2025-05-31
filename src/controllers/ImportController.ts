import { Request, Response } from 'express';
import { TransactionalService } from '../services/TransactionalService.js';
import { ProcessDto } from '../dtos/ProcessDto.js';
import { ProfessorEnrollmentDtoData, StudentEnrollmentDtoData } from '../dtos/EnrollmentDto.js';
import { DocumentService } from '../services/DocumentService.js';
import { AppDataSource } from '../connection/mysqlConnection.js';
import assert from 'assert';

export default {
    async saveDocumentsToTransactionalDatabase(req: Request, res: Response) {
        try {
          const processId = req.params.id;
      
          const documentService = new DocumentService();
          const processData = await documentService.bundleProcessData(processId);
      
          if (!processData) {
            return res.status(404).json({ error: `Data not found for process: ${processId}` });
          }

          const transactionalService = new TransactionalService(AppDataSource);
          const processEntities = await transactionalService.completeImport(processData);
      
          return res.status(200).json(processEntities);
        } catch (error) {
          return res.status(500).json({ error: (error as Error).message });
        }
    },
    async saveData(req: Request, res: Response) {
        try {
            const studentEnrollments = req.body.data.studentsEnrollments.map(
            (studentEnrollment: StudentEnrollmentDtoData) => ({
                ...studentEnrollment,
                email: studentEnrollment.studentEmail,
                professor: false,
            })
            );

            const professorEnrollments = req.body.data.professorEnrollments.map(
            (professorEnrollment: ProfessorEnrollmentDtoData) => ({
                ...professorEnrollment,
                email: professorEnrollment.professorEmail,
                professor: true,
            })
            );

            const enrollments = [...studentEnrollments, ...professorEnrollments];

            const processData: ProcessDto = req.body.data;
            processData.enrollments = enrollments;

            const transactionalService = new TransactionalService(AppDataSource);
            const processEntities = await transactionalService.completeImport(processData);

            return res.status(201).json(processEntities);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    },
    async import(req: Request, res: Response) {
        try {
            const { processId, schoolPeriod, subjects, classes, users, enrollments } = req.body;

            const process: ProcessDto = {
                processId: processId,
                schoolPeriod: schoolPeriod,
                subjects: subjects,
                classes: classes,
                users: users,
                enrollments: enrollments
            };

            const documentService = new DocumentService();
            const processData = await documentService.processAllInOne(process);
            assert(processData, 'Error persisting imported data for process: ' + processId)

            return res.status(201).json({
                message: 'Dados importados com sucesso!',
                processData: processData
            });
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
};