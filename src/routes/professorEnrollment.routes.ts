import { Router } from 'express';
import ProfessorEnrollmentController from '../controllers/ProfessorEnrollmentController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router.post('/batch', asyncHandler(ProfessorEnrollmentController.storeBatch));
router.post('/', asyncHandler(ProfessorEnrollmentController.store));
router.get('/', asyncHandler(ProfessorEnrollmentController.index));
router.get('/:id',asyncHandler( ProfessorEnrollmentController.show));
router.put('/:id', asyncHandler(ProfessorEnrollmentController.update));
router.delete('/:id', asyncHandler(ProfessorEnrollmentController.destroy));

export default router;