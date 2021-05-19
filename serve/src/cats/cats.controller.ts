import {
  Controller,
  Get,
  Req,
  Res,
  HttpStatus,
  Post,
  HttpCode,
  Header,
  Redirect,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express'; // 表示http请求，具有request查询字符串，参数，http标头和正文属性
import { CreateCatDto, QueryReq, ParamsReq } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private cateService: CatsService) {} //CatsService 是通过类构造函数注入的
  @Get() // Get请求 cats
  findAll(): string {
    return 'this action returns all cats!';
  }
  @Get('one') // Get请求 cats/one
  findOne(@Req() request: Request): string {
    return 'this action returns all findOne!';
  }
  @Post() // Post请求 cats
  @HttpCode(204) // 状态码
  @Header('Cache-Control', 'none') // 响应头
  create(): string {
    return 'This action adds a new cat';
  }
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id/:id2') // 路由参数
  findTow(@Param() params): string {
    // @Param() params params.id
    return `This action returns a #${params} cat`;
  }
  @Get()
  async findThree(): Promise<any[]> {
    return [];
  }

  // 请求负载
  // http://localhost:3000/cats/reqpay body:{name:tom,age:12,breed:iha}
  @Post('reqpay')
  requestPayload(@Body() createCatDto: CreateCatDto) {
    console.info({ createCatDto });
    return {
      name: createCatDto.name,
      age: createCatDto.age,
      breed: createCatDto.breed,
    };
  }
  // http://localhost:3000/cats/reqquery?name=tom&age=12&breed=iha
  @Get('reqquery')
  requestQuery(@Query() query: QueryReq) {
    return {
      name: query.name,
      age: query.age,
      breed: query.breed,
    };
  }
  // http://localhost:3000/cats/reqparams/tom/12/iha
  @Get('reqparams/:name/:age/:breed')
  requestParams(@Param() params: ParamsReq) {
    return {
      name: params.name,
      age: params.age,
      breed: params.breed,
    };
  }
  // 类库特有方式
  @Get('sr')
  specialReponseGet(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send({ name: 'tom', age: 12, breed: 'iha' });
  }
  @Post('sr')
  specialReponsePost(@Res() res: Response) {
    res.status(HttpStatus.OK).json([
      { name: 'tom', age: 12, breed: 'iha' },
      { name: 'tom', age: 12, breed: 'iha' },
    ]);
  }
  @Post('resadd')
  async serCreate(@Body() createCatDto: CreateCatDto) {
    // ↑ 接口接收dto数据模型的参数  ↑
    this.cateService.create(createCatDto);
    // ↑ 复杂数据处理 serveice 来处理 创建新对象  ↑
  }
  @Get('resfind')
  async serFindAll(): Promise<Cat[]> {
    return this.cateService.findAll();
  }
}
