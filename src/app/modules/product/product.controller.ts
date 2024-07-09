import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { productService } from './product.service';

const createProduct: RequestHandler = catchAsync(async (req, res) => {
  const data = await productService.createProductDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'created product successfully',
    data,
  });
});

export const productController = {
  createProduct,
};
