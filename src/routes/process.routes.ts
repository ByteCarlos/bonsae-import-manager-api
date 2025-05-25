import { Router } from "express";
import ProcessController from "../controllers/ProcessController.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = Router();

router.post('/', asyncHandler(ProcessController.createProcess))
router.get('/', asyncHandler(ProcessController.getAllProcesses));
router.get('/:processId', asyncHandler(ProcessController.getProcess))
router.get('/partial/:processId/:model', asyncHandler(ProcessController.getPartialProcess))
router.get('/full/:processId', asyncHandler(ProcessController.getFullProcess))
//router.put('/:processId', asyncHandler(ProcessController.update));
router.delete('/:processId', asyncHandler(ProcessController.destroy));
router.delete('/partial/:processId/:model', asyncHandler(ProcessController.destroyPartial))

export default router;