import { z } from 'zod';

const teamSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    rating: z.number(),
    description: z.string(),
  }),
});

export default teamSchemaValidation;
