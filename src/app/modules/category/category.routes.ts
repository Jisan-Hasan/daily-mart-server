import express from 'express';
import { CategoryController } from './category.controller';
import validate from '../../middlewares/validate';
import { CategoryValidation } from './category.validation';

const router = express.Router();

router.post(
  '/',
  validate(CategoryValidation.create),
  CategoryController.create,
);

router.get('/', CategoryController.getAll);

router.get('/:id', CategoryController.getSingle);

//TODO: add auth guard - auth(User_Role.shop_keeper)
router.delete('/:id', CategoryController.deleteOne);

//TODO: add auth guard - auth(User_Role.shop_keeper)
router.patch(
  '/:id',
  validate(CategoryValidation.update),
  CategoryController.updateOne,
);

export const CategoryRoute = router;
