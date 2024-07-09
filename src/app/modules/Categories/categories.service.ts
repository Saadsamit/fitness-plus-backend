import { Request } from 'express';
import TCategories from './categories.interfact';
import categorie from './categories.model';

const createCategorieDB = async (payload: TCategories) => {
  return await categorie.create(payload);
};

const getCategorieDB = async (req: Request) => {
  let select = '';
  
  if (req.query?.select) select = req.query?.select as string;

  const data = await categorie.find().select(select);
  return data;
};

export const categorieService = {
  createCategorieDB,
  getCategorieDB,
};
