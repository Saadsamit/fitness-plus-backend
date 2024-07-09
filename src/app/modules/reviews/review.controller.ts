import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { reviewService } from './review.service';

const getReviews: RequestHandler = catchAsync(async (req, res) => {
  const data = await reviewService.getReviewDB();

  sendResponse(res, {
    success: data.length ? true : false,
    statusCode: data.length ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: data.length ? 'retrieved review successfully' : 'review not found',
    data,
  });
});

export const reviewController = {
  getReviews,
};
