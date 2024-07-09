import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { checkoutService } from './checkout.service';

const createCheckout: RequestHandler = catchAsync(async (req, res) => {
  const data = await checkoutService.createCheckoutDB(req.body);
  sendResponse(res, {
    success: data ? true : false,
    statusCode: data ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: data ? 'created Checkout successfully' : 'fail to checkout',
    data,
  });
});

export const checkoutController = {
  createCheckout,
};
