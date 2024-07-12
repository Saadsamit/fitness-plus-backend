import { Request } from 'express';
import TCategories from './categories.interfact';
import categorie from './categories.model';

const createCategorieDB = async (payload: TCategories) => {
  return await categorie.create(payload);
};

const getCategorieDB = async (req: Request) => {
  const fields = (req.query.fields as string)?.split(',').join(' ') || '-__v';
  

  const data = await categorie.find().select(fields);
  return data;
};

export const categorieService = {
  createCategorieDB,
  getCategorieDB,
};
