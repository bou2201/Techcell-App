import instance from '@configs/axios.config';
import { ETechcellApis } from '@constants/enum.const';
import { CUser } from '@models/user.model';
import {
  CChangePassword,
  CLogin,
  CRegister,
  CVerifyEmail,
  CVerifyForgotPassword,
} from '@models/auth.model';

export const loginApi = (payload: CLogin) =>
  instance.post<CUser>(`${ETechcellApis.Auth}/login`, payload);

export const registerApi = (payload: CRegister) =>
  instance.post<CUser>(`${ETechcellApis.Auth}/register`, payload);

export const checkEmailApi = (email: string) =>
  instance.post(`${ETechcellApis.Auth}/check-email`, { email });

export const verifyEmailApi = (payload: CVerifyEmail) =>
  instance.post(`${ETechcellApis.Auth}/verify-email`, payload);

export const resendVerifyEmailApi = (email: string) =>
  instance.post(`${ETechcellApis.Auth}/resend-verify-email-otp`, { email });

export const refreshTokenApi = (refreshToken: string) =>
  instance.post<CUser>(`${ETechcellApis.Auth}/refresh-token`, { refreshToken });

export const forgotPasswordApi = (email: string) =>
  instance.post(`${ETechcellApis.Auth}/forgot-password`, { email });

export const verifyForgotPasswordApi = (payload: CVerifyForgotPassword) =>
  instance.post(`${ETechcellApis.Auth}/verify-forgot-password`, payload);

export const changePassword = (payload: CChangePassword) =>
  instance.post(`${ETechcellApis.Auth}/change-password`, payload);
