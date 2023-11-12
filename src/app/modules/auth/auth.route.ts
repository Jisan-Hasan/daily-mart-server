import express from 'express';
import validate from '../../middlewares/validate';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post('/signup', validate(AuthValidation.signup), AuthController.signup);

export const AuthRoutes = router;
