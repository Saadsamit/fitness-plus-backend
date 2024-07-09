import { z } from 'zod';

const productSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    stock: z.number(),
  }),
});

export default productSchemaValidation;
