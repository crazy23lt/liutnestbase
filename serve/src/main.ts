import { NestFactory } from '@nestjs/core'; // NestFactory 核心类
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // NestFactory核心类的静态方法create返回应用程序对象
  await app.listen(3000); // 启动http侦听器，监听入栈http请求
}
bootstrap();
