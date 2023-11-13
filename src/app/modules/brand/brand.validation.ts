import { z } from 'zod';

const create = z.object({
  body: z
    .object({
      name: z.string({ required_error: 'Brand name must be required' }),
      image: z.string({ required_error: 'Brand name must be required' }),
      description: z.string().optional(),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      name: z.string().optional(),
      image: z.string().optional(),
      description: z.string().optional(),
    })
    .strict(),
});

export const BrandValidation = {
  create,
  update,
};
