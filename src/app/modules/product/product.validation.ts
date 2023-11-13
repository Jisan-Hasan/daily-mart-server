import { z } from 'zod';

const create = z.object({
  body: z
    .object({
      name: z.string({ required_error: 'Product name must be required' }),
      description: z.string({
        required_error: 'Product Description must be required',
      }),
      price: z.number({ required_error: 'Product price must be required' }),
      quantity: z.number().int().default(0).optional(),
      image: z.string({ required_error: 'Product image must be required' }),
      brandId: z.string({ required_error: 'Brand ID must be required' }),
      categoryId: z.string({ required_error: 'Category ID must be required' }),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      name: z.string().optional(),
      description: z.string().optional(),
      price: z.number().optional(),
      quantity: z.number().int().optional(),
      image: z.string().optional(),
      brandId: z.string().optional(),
      categoryId: z.string().optional(),
    })
    .strict(),
});

export const ProductValidation = {
  create,
  update,
};
