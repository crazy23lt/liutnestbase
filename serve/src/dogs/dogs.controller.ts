import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RoleGuard } from 'src/common/guard/role.guard';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/dogs.dto';
import { Dog } from './interface/dog.interface';

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
  @Get('ch')
  async catchHttp() {
    return this.dogsService.catchHttp();
  }
}
