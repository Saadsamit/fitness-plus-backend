import review from './review.model';

const getReviewDB = async () => {
  return await review.find();
};

export const reviewService = {
  getReviewDB,
};
