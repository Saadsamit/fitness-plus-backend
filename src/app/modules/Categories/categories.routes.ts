import { Router } from 'express';
import { categorieController } from './categories.controller';
import validateRequest from '../../middlewares/validateRequest';
import categorieSchemaValidation from './categories.validation';

const router = Router();

router.post(
  '/',
  validateRequest(categorieSchemaValidation),
  categorieController.createCategorie,
);

router.get('/', categorieController.getCategorie);

export const categorieRoutes = router;
