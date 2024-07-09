import { Request } from 'express';
import { TProduct } from './product.interface';
import product from './product.model';

const createProductDB = async (payload: TProduct) => {
  return await product.create(payload);
};

const getAllProductDB = async (req: Request) => {
  const page = Number(req.query?.page);
  const limit = Number(req.query?.limit);

  if (page && limit) {
    const skip = (page - 1) * limit;
    return await product.find().limit(limit).skip(skip);
  }

  return await product.find();
};

const getAProductDB = async (id: string) => {
  return await product.findById(id);
};

const deleteProductDB = async (id: string) => {
  return await product.findByIdAndDelete(id);
};

const updateProductDB = async (id: string, payload: Partial<TProduct>) => {
  return await product.findByIdAndUpdate(id, payload, { new: true });
};

export const productService = {
  createProductDB,
  getAllProductDB,
  getAProductDB,
  deleteProductDB,
  updateProductDB,
};
