import { ForbiddenException } from './../common/exception/forbidden.exception';
import { Injectable } from '@nestjs/common';
import { Dog } from './interface/dog.interface';

/**
 * 注入方式
 * 1.基于构造函数注入
 * 2.基于属性注入
 */

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];
  create(dog: Dog) {
    this.dogs.push(dog);
  }
  findAll(): Dog[] {
    return this.dogs;
  }
  catchHttp() {
    // nestjs 基础异常处理
    // throw new HttpException(
    //   { status: HttpStatus.FORBIDDEN, error: 'This is a custom message' },
    //   HttpStatus.FORBIDDEN,
    // );
    // 自定义异常处理
    throw new ForbiddenException(40010, '您无权登录');
  }
}
