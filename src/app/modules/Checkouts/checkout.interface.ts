import { Types } from 'mongoose';

export interface TCheckoutProduct {
  productId: Types.ObjectId;
  quantity: number;
}

export interface TCheckout {
  name: string;
  email: string;
  phone: string;
  address: string;
  totalPrice: number;
  isPaid: boolean;
  products: TCheckoutProduct[];
}
