import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
@Module({
  controllers: [CatsController],
  // ↑ 注册控制器 ↑ 处理http请求 ↑
  providers: [CatsService],
  // ↑ 注册提供者 ↑ 处理复杂业务逻辑 ↑
})
export class CatsModule {}
