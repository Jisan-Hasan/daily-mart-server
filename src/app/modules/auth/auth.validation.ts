import { z } from 'zod';

const signup = z.object({
  body: z
    .object({
      name: z.string({ required_error: 'Name is required' }).min(3).max(20),
      email: z.string({ required_error: 'Email is required' }).email(),
      password: z
        .string({ required_error: 'Password is required' })
        .min(6)
        .max(15),
    })
    .strict(),
});

const createShopKeeper = z.object({
  body: z
    .object({
      name: z.string({ required_error: 'Name is required' }).min(3).max(20),
      email: z.string({ required_error: 'Email is required' }).email(),
      password: z
        .string({ required_error: 'Password is required' })
        .min(6)
        .max(15),
      address: z.string({ required_error: 'Address is required' }),
      shopName: z.string({ required_error: 'Shop Name is required' }),
      shopAddress: z.string({ required_error: 'Shop Address is required' }),
      contactNo: z.string({ required_error: 'Contact Number is required' }),
      gender: z.string({ required_error: 'Gender is required' }),
    })
    .strict(),
});

const login = z.object({
  body: z
    .object({
      email: z.string({ required_error: 'Email is required' }).email(),
      password: z
        .string({ required_error: 'Password is required' })
        .min(6)
        .max(15),
    })
    .strict(),
});

const changePassword = z.object({
  body: z
    .object({
      oldPassword: z
        .string({ required_error: 'Old password is required' })
        .min(6)
        .max(15),
      newPassword: z
        .string({ required_error: 'New password is required' })
        .min(6)
        .max(15),
    })
    .strict(),
});

export const AuthValidation = {
  signup,
  createShopKeeper,
  login,
  changePassword,
};
