import { Router } from 'express';
import EnrollmentController from '../controllers/EnrollmentController.js';

const router = Router();

router.post('/', EnrollmentController.store);
router.get('/', EnrollmentController.index);
router.get('/:id', EnrollmentController.show);
router.put('/:id', EnrollmentController.update);
router.delete('/:id', EnrollmentController.destroy);

export default router;
