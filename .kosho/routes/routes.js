import express from 'express';
import { homeIndex, loginIndex, registerIndex } from '../controllers/views.js';
import { login, register } from '../controllers/auth.js';
const router = express.Router();
// views
router.get('/', homeIndex);
router.get('/login', loginIndex);
router.get('/register', registerIndex);
// auth
router.post('/api/login', login);
router.post('/api/register', register);
export default router;
