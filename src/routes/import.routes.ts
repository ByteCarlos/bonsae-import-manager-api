import { Router } from 'express';
import ImportController from '../controllers/ImportController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router.post('/csv', asyncHandler(ImportController.import));
router.post('/save-data', asyncHandler(ImportController.saveData))
router.post('/save-documents', asyncHandler(ImportController.saveDocumentsToTransactionalDatabase))

export default router;