import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import asyncHandler from '../utils/asyncHandler.js';
const router = Router();
router.post('/', asyncHandler(UserController.store));
router.get('/', asyncHandler(UserController.index));
router.get('/:id', asyncHandler(UserController.show));
router.put('/:id', asyncHandler(UserController.update));
router.delete('/:id', asyncHandler(UserController.destroy));
export default router;
//# sourceMappingURL=user.routes.js.map