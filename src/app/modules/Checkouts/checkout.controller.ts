import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { checkoutService } from './checkout.service';

const createCheckout: RequestHandler = catchAsync(async (req, res) => {
  const data = await checkoutService.createCheckoutDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'created Checkout successfully',
    data,
  });
});

export const checkoutController = {
  createCheckout,
};
