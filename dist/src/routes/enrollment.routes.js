import { Router } from 'express';
import EnrollmentController from '../controllers/EnrollmentController.js';
import asyncHandler from '../utils/asyncHandler.js';
const router = Router();
router.post('/', asyncHandler(EnrollmentController.store));
router.get('/', asyncHandler(EnrollmentController.index));
router.get('/:id', asyncHandler(EnrollmentController.show));
router.put('/:id', asyncHandler(EnrollmentController.update));
router.delete('/:id', asyncHandler(EnrollmentController.destroy));
export default router;
//# sourceMappingURL=enrollment.routes.js.map