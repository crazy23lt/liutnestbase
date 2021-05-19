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
}
