import express from 'express';
import { googleAuth, googleAuthCallback, authSuccess } from '../controllers/authController.js';

const router = express.Router();

router.get('/google', googleAuth);

router.get('/google/callback', googleAuthCallback, authSuccess);

export default router;