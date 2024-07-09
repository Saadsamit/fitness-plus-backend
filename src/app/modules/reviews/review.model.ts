import { model, Schema } from 'mongoose';
import TReview from './review.interfact';

const reviewSchema = new Schema<TReview>({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const review = model<TReview>('review', reviewSchema);

export default review;
