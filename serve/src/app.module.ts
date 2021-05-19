import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [CatsModule, AdminModule],
  // ↑ 导入模块 ↑ 数组中的模块提供了该模块的 控制器 与 提供者 ↑
  controllers: [AppController],
  // ↑ 注册控制器 ↑ 处理http请求 ↑
  providers: [AppService],
  // ↑ 注册提供者 ↑ 处理复杂业务逻辑 ↑
})
export class AppModule {}
