import { TNumberOrNull } from '@type/common.type';

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

export class ApiReturn<T = unknown> {
  success: boolean;
  data?: T;

  constructor(success: boolean, data?: T) {
    this.success = success;
    this.data = data;
  }
}
