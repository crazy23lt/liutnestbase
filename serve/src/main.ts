import { NestFactory } from '@nestjs/core'; // NestFactory 核心类
import { AppModule } from './app.module';
import { RoleGuard } from './common/guard/role.guard';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // NestFactory核心类的静态方法create返回应用程序对象
  // app.useGlobalGuards(new RoleGuard());
  // ↑ 设置全局路由守卫 ↑
  const config = new DocumentBuilder()
    .setTitle('nest入门接口标题')
    .setDescription('使用nest书写的常用性接口')
    .setVersion('1.0.0')
    .addTag('狗属', '针对所有狗狗的接口')
    .addTag('猫属', '针对所有猫猫的接口')
    .addTag('主人属', '针对所有主人的接口')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000); // 启动http侦听器，监听入栈http请求
}
bootstrap();
