import express from 'express';
import { BrandController } from './brand.controller';
import validate from '../../middlewares/validate';
import { BrandValidation } from './brand.validation';

const router = express.Router();

router.post('/', validate(BrandValidation.create), BrandController.create);

router.get('/', BrandController.getAll);

router.get('/:id', BrandController.getSingle);

//TODO:add auth guard - auth(User_Role.shop_keeper)
router.delete('/:id', BrandController.deleteOne);

//TODO:add auth guard - auth(User_Role.shop_keeper)
router.patch(
  '/:id',
  validate(BrandValidation.update),

  BrandController.updateOne,
);

export const BrandRoute = router;
