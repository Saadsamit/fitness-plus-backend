import { TProduct } from './product.interface';
import product from './product.model';

const createProductDB = async (payload: TProduct) => {
  return await product.create(payload);
};

export const productService = {
  createProductDB,
};
