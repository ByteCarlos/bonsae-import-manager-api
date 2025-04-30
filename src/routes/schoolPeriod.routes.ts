import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import SchoolPeriodController from '../controllers/SchoolPeriodController';

const router = Router();

router.post('/batch', asyncHandler(SchoolPeriodController.storeBatch));
router.post('/', asyncHandler(SchoolPeriodController.store));
router.get('/', asyncHandler(SchoolPeriodController.index));
router.get('/:id', asyncHandler(SchoolPeriodController.show));
router.put('/:id', asyncHandler(SchoolPeriodController.update));
router.delete('/:id', asyncHandler(SchoolPeriodController.destroy));

export default router;