import { Router } from 'express';
import ImportController from '../controllers/ImportController.js';

const router = Router();

router.post('/csv', ImportController.import);

export default router;