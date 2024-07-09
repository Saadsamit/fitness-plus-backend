import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { reviewService } from './review.service';

const getReviews: RequestHandler = catchAsync(async (req, res) => {
  const data = await reviewService.getReviewDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'retrieved reviews successfully',
    data,
  });
});

export const reviewController = {
  getReviews,
};
