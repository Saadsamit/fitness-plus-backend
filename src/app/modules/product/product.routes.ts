import { Router } from 'express';
import { productController } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import productSchemaValidation from './product.validation';

const router = Router();

router.post(
  '/',
  validateRequest(productSchemaValidation),
  productController.createProduct,
);

export const productRoutes = router;
