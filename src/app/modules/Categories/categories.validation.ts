import { z } from 'zod';

const categorieSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
  }),
});

export default categorieSchemaValidation;
