import { CommonImage, TStringOrNull, Timestamp } from './common.model';

export class CUser extends Timestamp {
  _id: TStringOrNull = null;
  email: TStringOrNull = null;
  emailVerified: boolean = false;
  role: TStringOrNull = null;
  userName: TStringOrNull = null;
  avatar: CommonImage = new CommonImage();
  avatarPublicId?: TStringOrNull = null;
  address: CAddress[] = [];
  accessToken: TStringOrNull = null;
  refreshToken: TStringOrNull = null;
  firstName: TStringOrNull = null;
  lastName: TStringOrNull = null;
  block?: {
    isBlocked?: boolean;
    activityLogs?: CActivityLog[];
  };
}

export class CAddress {
  addressName: TStringOrNull = null;
  customerName: TStringOrNull = null;
  phoneNumbers: TStringOrNull = null;
  // provinceLevel: Province | Province[] | null = null;
  // districtLevel: District | District[] | null = null;
  // wardLevel: Ward | Ward[] | null = null;
  detail: TStringOrNull = null;
  isDefault: boolean = false;
}

export class CActivityLog {
  activity: TStringOrNull = null;
  activityBy: TStringOrNull = null;
  activityReason: TStringOrNull = null;
  activityNote: TStringOrNull = null;
}
