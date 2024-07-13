import { model, Schema } from 'mongoose';
import { TCheckout, TCheckoutProduct } from './checkout.interface';

const checkoutProductSchema = new Schema<TCheckoutProduct>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'product',
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const checkoutSchema = new Schema<TCheckout>({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  products: {
    type: [checkoutProductSchema],
    required: true,
  },
});

const checkout = model<TCheckout>('checkout', checkoutSchema);

export default checkout;
