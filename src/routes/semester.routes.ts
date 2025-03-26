import { Router } from 'express';
import SemesterController from '../controllers/SemesterController.js';

const router = Router();

router.post('/', SemesterController.store);
router.get('/', SemesterController.index);
router.get('/:id', SemesterController.show);
router.put('/:id', SemesterController.update);
router.delete('/:id', SemesterController.destroy);

export default router;