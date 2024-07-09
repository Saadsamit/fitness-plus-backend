import { Router } from 'express';
import { categorieRoutes } from '../modules/Categories/categories.routes';
import { teamRoutes } from '../modules/Teams/team.routes';
import { reviewRoutes } from '../modules/reviews/review.routes';
import { checkoutRoutes } from '../modules/Checkouts/checkout.routes';
import { productRoutes } from '../modules/product/product.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/product',
    route: productRoutes,
  },
  {
    path: '/categories',
    route: categorieRoutes,
  },
  {
    path: '/teams',
    route: teamRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/checkout',
    route: checkoutRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
