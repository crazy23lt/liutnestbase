import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AdminModule } from './admin/admin.module';
import { DogsModule } from './dogs/dogs.module';
import { LoggerMiddleware } from './common/middleware/logger.middlerware';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [CatsModule, AdminModule, DogsModule],
  // ↑ 导入模块 ↑ 数组中的模块提供了该模块的 控制器 与 提供者 ↑
  controllers: [AppController],
  // ↑ 注册控制器 ↑ 处理http请求 ↑
  providers: [AppService],
  // ↑ 注册提供者 ↑ 处理复杂业务逻辑 ↑
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(DogsController);
    // ↑ DogsController ↑ 控制器的中间件 ↑
  }
}
