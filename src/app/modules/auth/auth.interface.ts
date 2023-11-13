import { Gender } from '@prisma/client';

export type ISignupRequest = {
  name: string;
  email: string;
  password: string;
};

export type IShopKeeperRequest = {
  shopName: string;
  shopAddress: string;
  contactNo: string;
  gender: Gender;
} & ISignupRequest;

export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  token: string;
};

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};
