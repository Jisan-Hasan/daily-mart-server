export type ISignupRequest = {
  name: string;
  email: string;
  password: string;
};

export type IShopKeeperRequest = {
  shopName: string;
  shopAddress: string;
  contactNo: string;
  address: string;
  gender: string;
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
