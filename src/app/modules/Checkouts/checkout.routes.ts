import { Router } from 'express';
import { checkoutController } from './checkout.controller';
import validateRequest from '../../middlewares/validateRequest';
import checkoutSchemaValidation from './checkout.validation';

const router = Router();

router.post(
  '/',
  validateRequest(checkoutSchemaValidation),
  checkoutController.createCheckout,
);

export const checkoutRoutes = router;
