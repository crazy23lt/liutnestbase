import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(errcode: number, errmsg: string) {
    super({ errcode, errmsg }, HttpStatus.OK);
  }
}
