import { Router } from 'express';
import SemesterController from '../controllers/SemesterController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router.post('/', asyncHandler(SemesterController.store));
router.get('/', asyncHandler(SemesterController.index));
router.get('/:id', asyncHandler(SemesterController.show));
router.put('/:id', asyncHandler(SemesterController.update));
router.delete('/:id', asyncHandler(SemesterController.destroy));

export default router;