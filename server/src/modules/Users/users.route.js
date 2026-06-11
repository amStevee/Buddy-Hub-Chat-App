import express from 'express';
import userController from './users.controller.js';

const router = express.Router();

router.post('/', userController.createUser);

export default router;