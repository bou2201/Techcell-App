export class CommonImage {
  publicId: string;
  url: string;
  isThumbnail: boolean;

  constructor() {
    this.publicId = '';
    this.url = '';
    this.isThumbnail = false;
  }
}

export class Timestamp {
  createdAt: string;
  updatedAt: string;

  constructor() {
    this.createdAt = '';
    this.updatedAt = '';
  }
}

export class PagingResponse<T = unknown> {
  page: TNumberOrNull = null;
  pageSize: TNumberOrNull = null;
  totalPage: TNumberOrNull = null;
  totalRecord: TNumberOrNull = null;
  data: T[] = [];
}

export type TStringOrNull = string | null;
export type TNumberOrNull = number | null;
