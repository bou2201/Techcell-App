import { TStringOrNull } from "@type/common.type";
import { Timestamp } from "./common.model";

export class CAttribute extends Timestamp {
  _id: TStringOrNull = null;
  label: TStringOrNull = null;
  name: TStringOrNull = null;
  description: TStringOrNull = null;
}

export class CAttributeDynamic {
  k: TStringOrNull = null;
  v: TStringOrNull = null;
  u: TStringOrNull = null;
  name: TStringOrNull = null;
}