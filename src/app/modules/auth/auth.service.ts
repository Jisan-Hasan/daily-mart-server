import { User_Role } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { comparePassword, hashPassword } from '../../../shared/bcrypt';
import prisma from '../../../shared/prisma';
import {
  IChangePassword,
  ILoginResponse,
  ILoginUser,
  IShopKeeperRequest,
  ISignupRequest,
} from './auth.interface';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

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

const createShopKeeper = async (payload: IShopKeeperRequest): Promise<void> => {
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
  const shopKeeperData = {
    email,
    ...otherData,
  };

  await prisma.$transaction(async transactionClient => {
    // create a new customer
    const newShopKeeper = await transactionClient.shopKeeper.create({
      data: shopKeeperData,
    });

    // check if newShopKeeper is created
    if (!newShopKeeper) {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'Shopkeeper is not created',
      );
    }

    // create a new user
    const newUserData = {
      email,
      password: encryptedPassword,
      role: User_Role.customer,
      shopKeeperId: newShopKeeper.id,
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

const login = async (payload: ILoginUser): Promise<ILoginResponse | null> => {
  const { email, password } = payload;
  // check if user already exists with the email
  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User is not exist');
  }
  // check if password is correct or not
  if (
    isUserExist.password &&
    !(await comparePassword(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password in incorrect');
  }
  const jwtPayload = { email: isUserExist?.email, role: isUserExist?.role };
  const token = jwtHelpers.createToken(
    jwtPayload,
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );
  //TODO:IMPLEMENT REFRESH TOKEN
  // const refreshToken = JwtHelpers.createToken(
  //   jwtPayload,
  //   config.jwt.refresh_secret_key as Secret,
  //   config.jwt.expires_in_refresh_key as string
  // );

  return {
    token,
  };
};

const changePassword = async (authEmail: string, payload: IChangePassword) => {
  const { oldPassword, newPassword } = payload;
  // check if user already exists with the email
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: authEmail,
    },
  });
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User is not exist');
  }
  // check if oldPassword is correct or not
  if (
    isUserExist.password &&
    !(await comparePassword(oldPassword, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Your password is not match');
  }

  await prisma.user.update({
    where: {
      email: authEmail,
    },
    data: {
      password: await hashPassword(newPassword),
    },
  });
};
export const AuthService = {
  signup,
  createShopKeeper,
  login,
  changePassword,
};
