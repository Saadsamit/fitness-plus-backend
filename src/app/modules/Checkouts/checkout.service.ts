import { TCheckout } from './checkout.interface';
import checkout from './checkout.model';

const createCheckoutDB = async (payload: TCheckout) => {
  return await checkout.create(payload);
};

export const checkoutService = {
  createCheckoutDB,
};
