import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Param,
  Query,
} from '@nestjs/common';
import { RoleGuard } from 'src/common/guard/role.guard';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/dogs.dto';
import { Dog } from './interface/dog.interface';
import {
  ApiTags,
  ApiHeader,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
@ApiTags('狗属')
@ApiHeader({
  name: 'authoriation',
  required: true,
  description: '本次请求请带上token',
})
@Controller('dogs')
@UseGuards(new RoleGuard())
export class DogsController {
  constructor(private dogsService: DogsService) {}
  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }
  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }
  @Get('find/:name')
  @ApiParam({
    name: 'name',
    description: '这是狗的名字',
  })
  async findOne(@Param('name') name: string): Promise<Dog> {
    return { name: '小白', age: 12, breed: 'white' };
  }
  @Get('search')
  @ApiQuery({
    name: 'name',
    description: '这是狗的名字',
  })
  async searchOne(@Query('name') name: string): Promise<Dog> {
    return { name: '小黑', age: 12, breed: 'black' };
  }
  @Get('ch')
  async catchHttp() {
    return this.dogsService.catchHttp();
  }
}
