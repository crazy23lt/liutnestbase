import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
  exports: [DogsService],
})
export class DogsModule {}
