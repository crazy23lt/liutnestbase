import { NestFactory } from '@nestjs/core'; // NestFactory 核心类
import { AppModule } from './app.module';
import { RoleGuard } from './common/guard/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // NestFactory核心类的静态方法create返回应用程序对象
  // app.useGlobalGuards(new RoleGuard());
  // ↑ 设置全局路由守卫 ↑
  await app.listen(3000); // 启动http侦听器，监听入栈http请求
}
bootstrap();
