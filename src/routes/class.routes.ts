import { Router } from 'express';
import ClassController from '../controllers/ClassController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router.post('/', asyncHandler(ClassController.store));
router.get('/', asyncHandler(ClassController.index));
router.get('/:id',asyncHandler( ClassController.show));
router.put('/:id', asyncHandler(ClassController.update));
router.delete('/:id', asyncHandler(ClassController.destroy));

export default router;