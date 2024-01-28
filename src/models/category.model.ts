import { TStringOrNull } from "@type/common.type";
import { CAttribute } from "./attribute,model";

export class CCategory {
  _id: TStringOrNull = null;
  name: TStringOrNull = null;
  label: TStringOrNull = null;
  description: TStringOrNull = null;
  url: TStringOrNull = null;
  requireAttributes: Array<CAttribute> = [];
}
