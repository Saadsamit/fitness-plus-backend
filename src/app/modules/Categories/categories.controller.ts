import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { categorieService } from './categories.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createCategorie: RequestHandler = catchAsync(async (req, res) => {
  const data = await categorieService.createCategorieDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categorie created successfully',
    data,
  });
});

const getCategorie: RequestHandler = catchAsync(async (req, res) => {
  const data = await categorieService.getCategorieDB(req);

  sendResponse(res, {
    success: data.length ? true : false,
    statusCode: data.length ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: data.length ? 'Retrieved Categorie successfully' : 'categorie not found',
    data,
  });
});

export const categorieController = {
  createCategorie,
  getCategorie,
};
