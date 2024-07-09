import { z } from 'zod';

const checkoutProductSchemaValidation = z.object({
  productId: z.string(),
  quantity: z.number(),
});

const checkoutSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    totalPrice: z.number(),
    isPaid: z.boolean(),
    products: z.array(checkoutProductSchemaValidation),
  }),
});

export default checkoutSchemaValidation;
