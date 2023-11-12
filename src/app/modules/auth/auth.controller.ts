import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

const signup = catchAsync(async (req: Request, res: Response) => {
  await AuthService.signup(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Signup successful',
  });
});

const createShopKeeper = catchAsync(async (req, res) => {
  await AuthService.createShopKeeper(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'ShopKeeper created successful',
  });
});

const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully logged in',
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  await AuthService.changePassword(req.user?.email, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Your password has been changed Successfully',
  });
});

export const AuthController = {
  signup,
  createShopKeeper,
  login,
  changePassword,
};
