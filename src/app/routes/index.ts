import { Router } from 'express';
import { categorieRoutes } from '../modules/Categories/categories.routes';
import { teamRoutes } from '../modules/Teams/team.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: categorieRoutes,
  },
  {
    path: '/teams',
    route: teamRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
