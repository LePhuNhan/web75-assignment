import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

// User routes (GET, POST, PUT, DELETE)

// GET all users
router.get('/', userController.getAllUsers);

// GET user by ID
router.get('/:id', userController.getUserById);

// POST create user
router.post('/', userController.createUser);

// PUT update user by ID
router.put('/:id', userController.updateUserById);

// DELETE user by ID
router.delete('/:id', userController.deleteUserById);

const userRoutes = router;

export default userRoutes;
