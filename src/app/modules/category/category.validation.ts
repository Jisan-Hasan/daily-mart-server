import { z } from 'zod';

const create = z.object({
  body: z
    .object({
      title: z.string({ required_error: 'Category name must be required' }),
      image: z.string({ required_error: 'Category image must be required' }),
      description: z.string().optional(),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      title: z.string().optional(),
      image: z.string().optional(),
      description: z.string().optional(),
    })
    .strict(),
});

export const CategoryValidation = {
  create,
  update,
};
