import { Request, Response } from "express";
import ProcessDocument from "../models/documents/ProcessDocument.js";
import mongoose from "mongoose";
import { DocumentService } from "../services/DocumentService.js";
import ProfessorEnrollmentDocument from "../models/documents/ProfessorEnrollmentDocument.js";
import StudentEnrollmentDocument from "../models/documents/StudentEnrollmentDocument.js";
import UserDocument from "../models/documents/UserDocument.js";
import ClassDocument from "../models/documents/ClassDocument.js";
import SubjectDocument from "../models/documents/SubjectDocument.js";
import SchoolPeriodDocument from "../models/documents/SchoolPeriodDocument.js";

const allowedModels = ['Subject', 'Class', 'User', 'Professor_Enrollment', 'Student_Enrollment', 'School_Period'];
const documentService = new DocumentService();

export default {
  async createProcess(req: Request, res: Response) {
    try {
      const { processId } = req.body;

      if (!processId) {
        return res.status(400).json({ error: "Missing processId in request body" });
      }

      const existing = await ProcessDocument.findOne({ processId });
      if (existing) {
        return res.status(409).json({ error: "Process already exists" });
      }

      const created = await ProcessDocument.create({ processId, currentStatus: req.body.currentStatus ?? 'INICIADO' });
      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },

  async getProcess(req: Request, res: Response) {
    try {
      const { processId } = req.params;

      if (!processId) {
        return res.status(400).json({ error: "Missing processId in URL parameters" });
      }

      const process = await ProcessDocument.findOne({ processId });
      if (!process) {
        return res.status(404).json({ error: "Process not found" });
      }

      const [
        professorEnrollments,
        studentEnrollments,
        users,
        classes,
        subjects,
        schoolPeriod
      ] = await Promise.all([
        ProfessorEnrollmentDocument.find({ processId }),
        StudentEnrollmentDocument.find({ processId }),
        UserDocument.find({ processId }),
        ClassDocument.find({ processId }),
        SubjectDocument.find({ processId }),
        SchoolPeriodDocument.findOne({ processId })
      ]);

      return res.status(200).json({
        process,
        professorEnrollments,
        studentEnrollments,
        users,
        classes,
        subjects,
        schoolPeriod
      });
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : "Unknown error";
      return res.status(500).json({ error: errMsg });
    }
  },

  async getFullProcess(req: Request, res: Response) {
    try {
      const { processId } = req.params;

      if (!processId) {
        return res.status(400).json({ error: "Missing processId in URL parameters" });
      }
    
      const process = await ProcessDocument.findOne({ processId: processId });
      if (!process) {
        return res.status(404).json({ error: "Process not found" });
      }

      const data = await documentService.bundleProcessData(processId);

      return res.status(200).json({ process: process, data: data });
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },

  async getPartialProcess(req: Request, res: Response) {
    try {
      const { processId, model } = req.params;

      if (!allowedModels.includes(model)) {
        return res.status(400).json({ error: `Model '${model}' is not allowed.` });
      }

      if (!processId || !model) {
        return res.status(400).json({ error: "Missing required URL parameters" });
      }

      const Model = mongoose.model(model);
      const stepData = await Model.find({ processId });
      if (!stepData) {
        return res.status(404).json({ error: `No data found for the model: ${model}` })
      }

      return res.status(200).json(stepData);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },

  async getAllProcesses(_req: Request, res: Response) {
    try {
      const processDocs = await ProcessDocument.find();

      if (!processDocs || processDocs.length === 0) {
        return res.status(404).json({ error: "No processes found" });
      }

      const processesWithPeriods = await Promise.all(
        processDocs.map(async (process) => {
          const schoolPeriod = await SchoolPeriodDocument.findOne({ processId: process.processId });
          return {
            process,
            schoolPeriod
          };
        })
      );

      return res.status(200).json(processesWithPeriods);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },

  /*
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { processId } = req.params;
      const updateData = req.body;

      const updatedProcess = await ProcessDocument.findOneAndUpdate(
        { processId },
        updateData,
        { new: true, runValidators: true }
      );

      if (!updatedProcess) {
        return res.status(404).json({ error: 'Process not found' });
      }

      return res.status(200).json(updatedProcess);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },
  */

  async updateProcessPart(req: Request, res: Response): Promise<Response> {
    try {
      const { processId, model } = req.params;
      const updateData = req.body;

      if (!processId || !model) {
        return res.status(400).json({ error: "Missing required URL parameters" });
      }

      if (!allowedModels.includes(model)) {
        return res.status(400).json({ error: `Model '${model}' is not allowed.` });
      }

      const Model = mongoose.model(model);
      const existingDocs = await Model.find({ processId });

      if (updateData.periodId) {
        const schoolPeriod = await mongoose.model('School_Period').findOne({ periodId: updateData.periodId });
        if (!schoolPeriod) {
          return res.status(400).json({ error: `No School_Period found with periodId '${updateData.periodId}'` });
        }
        updateData.schoolPeriodRef = schoolPeriod._id;
      }

      const result = await Model.updateMany({ processId }, updateData, { runValidators: true });

      if (model === 'Subject' && updateData.code) {
        for (const doc of existingDocs) {
          await mongoose.model('Class').updateMany(
            { subjectCode: doc.code, processId },
            { subjectCode: updateData.code }
          );
        }
      }

      const updatedProcess = await mongoose.model('Process').findOneAndUpdate(
        { processId },
        updateData,
        { new: true, runValidators: true }
      );

      if (!updatedProcess) {
        return res.status(404).json({ error: 'Process not found' });
      }

      return res.status(200).json({ updated: result.modifiedCount, updatedProcess });
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },

  async updateStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { processId } = req.params;
      const updateData = req.body;

      const updatedProcess = await ProcessDocument.findOneAndUpdate(
        { processId },
        updateData,
        { new: true, runValidators: true }
      );

      if (!updatedProcess) {
        return res.status(404).json({ error: 'Process not found' });
      }

      return res.status(200).json(updatedProcess);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },

  async destroy(req: Request, res: Response) {
    try {
      const { processId } = req.params;

      await Promise.all([
        ProfessorEnrollmentDocument.deleteMany({ processId: processId }),
        StudentEnrollmentDocument.deleteMany({ processId: processId }),
        UserDocument.deleteMany({ processId: processId }),
        ClassDocument.deleteMany({ processId: processId }),
        SubjectDocument.deleteMany({ processId: processId }),
        SchoolPeriodDocument.deleteMany({ processId: processId })
      ]);

      const process = await ProcessDocument.findOneAndDelete({ processId: processId });
      if (!process) return res.status(404).json({ error: 'Process not found' });
      return res.status(200).json({ message: 'Process deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },

  async destroyPartial(req: Request, res: Response) {
    try {
      const { processId, model } = req.params;

      if (!processId || !model) {
        return res.status(400).json({ error: "Missing required URL parameters" });
      }
      if (!allowedModels.includes(model)) {
        return res.status(400).json({ error: `Model '${model}' is not allowed.` });
      }

      const Model = mongoose.model(model);
      const result = await Model.deleteMany({ processId });

      return res.status(200).json({ message: `${model} data successfully deleted from process ${processId}`, result: result });
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },
};