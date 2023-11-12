import { User_Role } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { hashPassword } from '../../../shared/bcrypt';
import prisma from '../../../shared/prisma';
import { ISignupRequest } from './auth.interface';

const signup = async (payload: ISignupRequest): Promise<void> => {
  const { email, password, ...otherData } = payload;

  // check if user already exists with the email
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already exists');
  }

  // hash password
  const encryptedPassword = await hashPassword(password);

  // customer data
  const customerData = {
    email,
    ...otherData,
  };

  await prisma.$transaction(async transactionClient => {
    // create a new customer
    const newCustomer = await transactionClient.customer.create({
      data: customerData,
    });

    // check if newCustomer is created
    if (!newCustomer) {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'Customer not created',
      );
    }

    // create a new user
    const newUserData = {
      email,
      password: encryptedPassword,
      role: User_Role.customer,
      customerId: newCustomer.id,
    };
    const newUser = await transactionClient.user.create({
      data: newUserData,
    });

    // check if newUser is created
    if (!newUser) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'User not created');
    }
  });
};

export const AuthService = {
  signup,
};
