import express from 'express';
import validate from '../../middlewares/validate';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import auth from '../../middlewares/auth';
import { User_Role } from '@prisma/client';

const router = express.Router();

router.post('/signup', validate(AuthValidation.signup), AuthController.signup);
router.post(
  '/create-shop-keeper',
  validate(AuthValidation.shopKeeperData),
  AuthController.createShopKeeper,
);
router.post('/signin', validate(AuthValidation.login), AuthController.login);
router.post(
  '/change-password',
  validate(AuthValidation.changePassword),
  auth(User_Role.admin, User_Role.customer, User_Role.store_keeper),
  AuthController.changePassword,
);
export const AuthRoutes = router;
