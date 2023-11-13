import { User_Role } from '.prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';

const router = express.Router();

router.post(
  '/',
  auth(User_Role.shop_keeper),
  validate(CategoryValidation.create),
  CategoryController.create,
);

router.get('/', CategoryController.getAll);

router.get('/:id', CategoryController.getSingle);

router.delete(
  '/:id',
  auth(User_Role.shop_keeper),
  CategoryController.deleteOne,
);

router.patch(
  '/:id',
  auth(User_Role.shop_keeper),
  validate(CategoryValidation.update),
  CategoryController.updateOne,
);

export const CategoryRoute = router;
