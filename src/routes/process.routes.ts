import { Router } from "express";
import ProcessController from "../controllers/ProcessController";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post('/', asyncHandler(ProcessController.createProcess))
router.get('/', asyncHandler(ProcessController.getAllProcesses));
router.get('/:processId', asyncHandler(ProcessController.getProcess))
router.put('/:processId', asyncHandler(ProcessController.update));
router.delete('/:processId', asyncHandler(ProcessController.destroy));

export default router;