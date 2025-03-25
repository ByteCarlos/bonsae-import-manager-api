import { Router } from 'express';
import SubjectController from '../controllers/SubjectController.js';

const router = Router();

router.post('/', SubjectController.store);
router.get('/', SubjectController.index);
router.get('/:id', SubjectController.show);
router.put('/:id', SubjectController.update);
router.delete('/:id', SubjectController.destroy);

export default router;
