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

const getAllProduct: RequestHandler = catchAsync(async (req, res) => {
  const { data, count } = await productService.getAllProductDB(req);

  sendResponse(res, {
    success: data.length ? true : false,
    statusCode: data.length ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: data.length
      ? 'retrieved product successfully'
      : 'product not found',
    data,
    count,
  });
});

const getAProduct: RequestHandler = catchAsync(async (req, res) => {
  const data = await productService.getAProductDB(req.params.id);

  sendResponse(res, {
    success: data ? true : false,
    statusCode: data ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: data ? 'retrieved product successfully' : 'product not found',
    data,
  });
});

const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
  const data = await productService.deleteProductDB(req.params.id);

  sendResponse(res, {
    success: data ? true : false,
    statusCode: data ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: data ? 'product deleted successfully' : 'product not found',
    data: null,
  });
});

const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  const data = await productService.updateProductDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'product update successfully',
    data,
  });
});

export const productController = {
  createProduct,
  getAllProduct,
  getAProduct,
  deleteProduct,
  updateProduct,
};
