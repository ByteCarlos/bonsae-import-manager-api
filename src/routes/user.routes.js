import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const router = Router();

router.post('/', UserController.store);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

export default router;