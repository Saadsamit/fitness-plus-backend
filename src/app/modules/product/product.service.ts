import { Request } from 'express';
import { TProduct } from './product.interface';
import product from './product.model';

const createProductDB = async (payload: TProduct) => {
  return await product.create(payload);
};

const getAllProductDB = async (req: Request) => {
  const page = Number(req.query?.page) || 1;
  const limit = Number(req.query?.limit) || 4;
  const skip = (page - 1) * limit;
  const sort = (req.query.sort as string)?.split(',').join(' ') || '-createdAt';
  const category = req.query.category;
  const search = req.query.search;

  let find = {};
  if (category) {
    find = { category };
  }
  if (search) {
    find = { ...find, name: { $regex: search, $options: 'i' } };
  }

  const data = await product.find(find).sort(sort).limit(limit).skip(skip);
  const count = await product.estimatedDocumentCount();
  return {
    data,
    count,
  };
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
