import { TStringOrNull } from './common.model';

export class CLogin {
  emailOrUsername: TStringOrNull = null;
  password: TStringOrNull = null;
}

export class CRegister {
  email: TStringOrNull = null;
  userName?: TStringOrNull = null;
  password: TStringOrNull = null;
  re_password: TStringOrNull = null;
  firstName: TStringOrNull = null;
  lastName: TStringOrNull = null;
}

export class CVerifyEmail {
  email: TStringOrNull = null;
  otpCode: TStringOrNull = null;
}

export class CVerifyForgotPassword {
  email: TStringOrNull = null;
  otpCode: TStringOrNull = null;
  password: TStringOrNull = null;
  re_password: TStringOrNull = null;
}

export class CChangePassword {
  oldPassword: TStringOrNull = null;
  newPassword: TStringOrNull = null;
  reNewPassword: TStringOrNull = null;
}
