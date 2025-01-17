import { Router } from 'express';
import { reviewController } from './review.controller';

const router = Router();

router.get('/', reviewController.getReviews);

export const reviewRoutes = router;
