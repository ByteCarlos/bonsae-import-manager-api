import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router.post('/batch', asyncHandler(UserController.storeBatch));
router.post('/', asyncHandler(UserController.store));
router.get('/', asyncHandler(UserController.index));
router.get('/get-one', asyncHandler(UserController.show));
router.put('/update', asyncHandler(UserController.update));
router.delete('/delete', asyncHandler(UserController.destroy));

export default router;