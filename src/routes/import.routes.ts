import { Router } from 'express';
import ImportController from '../controllers/ImportController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router.post('/csv', asyncHandler(ImportController.import));
router.post('/complete', asyncHandler(ImportController.finish))

export default router;