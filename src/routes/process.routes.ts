import { Router } from "express";
import ProcessController from "../controllers/ProcessController";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post('/create', asyncHandler(ProcessController.createProcess))
router.get('/:processId', asyncHandler(ProcessController.getProcess))

export default router;