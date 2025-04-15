import { Router } from 'express';
import SubjectController from '../controllers/SubjectController.js';
import asyncHandler from '../utils/asyncHandler.js';
const router = Router();
router.post('/', asyncHandler(SubjectController.store));
router.get('/', asyncHandler(SubjectController.index));
router.get('/:id', asyncHandler(SubjectController.show));
router.put('/:id', asyncHandler(SubjectController.update));
router.delete('/:id', asyncHandler(SubjectController.destroy));
export default router;
//# sourceMappingURL=subject.routes.js.map