import { Router } from 'express';
import StudentEnrollmentController from '../controllers/StudentEnrollmentController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router.post('/batch', asyncHandler(StudentEnrollmentController.storeBatch));
router.post('/', asyncHandler(StudentEnrollmentController.store));
router.get('/', asyncHandler(StudentEnrollmentController.index));
router.get('/:id', asyncHandler(StudentEnrollmentController.show));
router.put('/:id', asyncHandler(StudentEnrollmentController.update));
router.delete('/:id', asyncHandler(StudentEnrollmentController.destroy));

export default router;
