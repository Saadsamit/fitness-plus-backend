import { startSession } from 'mongoose';
import { TCheckout } from './checkout.interface';
import checkout from './checkout.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import product from '../product/product.model';

const createCheckoutDB = async (payload: TCheckout) => {
  const session = await startSession();
  try {
    await session.startTransaction();

    const products = payload.products.map((item) => ({
      updateOne: {
        filter: {
          _id: item.productId,
          stock: { $gte: item.quantity },
        },
        update: { $inc: { stock: -item.quantity } },
      },
    }));

    const updateProduct = await product.bulkWrite(products, { session });

    if (updateProduct.modifiedCount === 0) {
      throw new AppError(httpStatus.BAD_REQUEST, 'fail to checkout');
    }
    console.log(updateProduct);

    const createCheckout = new checkout(payload);
    const result = await createCheckout.save({ session });
    if (!createCheckout) {
      throw new AppError(httpStatus.BAD_REQUEST, 'fail to checkout');
    }
    const data = await checkout.findById(result._id).session(session);

    await session.commitTransaction();
    await session.endSession();
    return data;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const checkoutService = {
  createCheckoutDB,
};
