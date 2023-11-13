import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BrandRoute } from '../modules/brand/brand.routes';
import { CategoryRoute } from '../modules/category/category.routes';
import { ProductRoute } from '../modules/product/product.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/brand',
    route: BrandRoute,
  },
  {
    path: '/category',
    route: CategoryRoute,
  },
  {
    path: '/product',
    route: ProductRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
