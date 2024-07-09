import { Router } from 'express';
import { productController } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  productSchemaValidation,
  updateProductSchemaValidation,
} from './product.validation';

const router = Router();

router.post(
  '/',
  validateRequest(productSchemaValidation),
  productController.createProduct,
);

router.get('/all', productController.getAllProduct);

router.get('/:id', productController.getAProduct);

router.delete('/:id', productController.deleteProduct);

router.put(
  '/:id',
  validateRequest(updateProductSchemaValidation),
  productController.updateProduct,
);

export const productRoutes = router;
