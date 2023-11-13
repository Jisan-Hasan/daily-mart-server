import express from 'express';
import { ProductController } from './product.controller';
import validate from '../../middlewares/validate';
import { ProductValidation } from './product.validation';

const router = express.Router();

// TODO: add auth guard - auth(User_Role.shop_keeper)
router.post('/', validate(ProductValidation.create), ProductController.create);

router.get('/', ProductController.getAll);

router.get('/:id', ProductController.getSingle);

// TODO: add auth guard - auth(User_Role.shop_keeper)
router.delete('/:id', ProductController.deleteOne);

// TODO: add auth guard - auth(User_Role.shop_keeper)
router.patch(
  '/:id',
  validate(ProductValidation.update),
  ProductController.updateOne,
);

export const ProductRoute = router;
