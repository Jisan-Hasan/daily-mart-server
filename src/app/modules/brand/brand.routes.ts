import { User_Role } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import { BrandController } from './brand.controller';
import { BrandValidation } from './brand.validation';

const router = express.Router();

router.post(
  '/',
  auth(User_Role.shop_keeper),
  validate(BrandValidation.create),
  BrandController.create,
);

router.get('/', BrandController.getAll);

router.get('/:id', BrandController.getSingle);

router.delete('/:id', auth(User_Role.shop_keeper), BrandController.deleteOne);

router.patch(
  '/:id',
  auth(User_Role.shop_keeper),
  validate(BrandValidation.update),
  BrandController.updateOne,
);

export const BrandRoute = router;
