import express from 'express';
import { homeIndex, loginIndex, registerIndex } from '../controllers/views.ts';
import { login } from '../controllers/auth.ts';

const router = express.Router();

// views
router.get('/', homeIndex);
router.get('/login', loginIndex);
router.get('/register', registerIndex);

// login
router.post('/api/login', login);

export default router;