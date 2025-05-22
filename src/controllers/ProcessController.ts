import { Request, Response } from "express";
import ProcessDocument from "../models/documents/ProcessDocument";
import mongoose from "mongoose";
import { DocumentService } from "../services/DocumentService";

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

      const created = await ProcessDocument.create({ processId });
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

      return res.status(200).json(process);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  },

  async getFullProcess(req: Request, res: Response) {
    try {
      const { processId } = req.params;

      if (!processId) {
        return res.status(400).json({ error: "Missing processId in URL parameters" });
      }

      const process = await ProcessDocument.findOne({ processId });
      if (!process) {
        return res.status(404).json({ error: "Process not found" });
      }

      const data = documentService.bundleProcessData(processId);

      return res.status(200).json(data);
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
      const processes = await ProcessDocument.find();

      if (!processes) {
        return res.status(404).json({ error: "No process found" });
      }

      return res.status(200).json(processes);
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

  async destroy(req: Request, res: Response) {
    try {
      const { processId } = req.params;
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