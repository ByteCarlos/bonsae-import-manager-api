import { Request, Response } from "express";
import ProcessDocument from "../models/documents/ProcessDocument";

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
  }
};