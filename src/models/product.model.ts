import { TNumberOrNull, TStringOrNull } from '@type/common.type';
import { CommonImage, Timestamp } from './common.model';
import { CCategory } from './category.model';
import { CAttributeDynamic } from './attribute,model';

export class CProduct extends Timestamp {
  _id: TStringOrNull = null;
  description: TStringOrNull = null;
  status: TNumberOrNull = null;
  category: CCategory = new CCategory();
  generalAttributes: Array<CAttributeDynamic> = [];
  variations: Array<CVariation> = [];
  generalImages: Array<CommonImage> = [];
  descriptionImages: Array<CommonImage> = [];
}

export class CVariation {
  attributes: Array<CAttributeDynamic> = [];
  stock: TNumberOrNull = null;
  price: CPrice = new CPrice();
  images: Array<CommonImage> = [];
  status: TNumberOrNull = null;
  sku: TStringOrNull = null;
}

export class CPrice {
  base: TNumberOrNull = null;
  special: TNumberOrNull = null;
}
