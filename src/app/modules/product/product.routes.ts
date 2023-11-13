import { User_Role } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import { ProductController } from './product.controller';
import { ProductValidation } from './product.validation';

const router = express.Router();

router.post(
  '/',
  auth(User_Role.shop_keeper),
  validate(ProductValidation.create),
  ProductController.create,
);

router.get('/', ProductController.getAll);

router.get('/:id', ProductController.getSingle);

router.delete('/:id', auth(User_Role.shop_keeper), ProductController.deleteOne);

router.patch(
  '/:id',
  auth(User_Role.shop_keeper),
  validate(ProductValidation.update),
  ProductController.updateOne,
);

export const ProductRoute = router;
