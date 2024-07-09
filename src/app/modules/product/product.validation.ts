import { z } from 'zod';

export const productSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    stock: z.number(),
  }),
});

export const updateProductSchemaValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    stock: z.number().optional(),
  }),
});
