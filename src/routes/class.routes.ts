import { Router } from 'express';
import ClassController from '../controllers/ClassController.js';

const router = Router();

router.post('/', ClassController.store);
router.get('/', ClassController.index);
router.get('/:id', ClassController.show);
router.put('/:id', ClassController.update);
router.delete('/:id', ClassController.destroy);

export default router;