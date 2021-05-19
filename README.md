# liutnestbase

nestJS 基础学习

## nest 核心文件

- `app.controller.ts` _带有单个路由的基本看控制器_
- `app.controller.spec.ts` _针对控制器的单元测试_
- `app.modules.ts` _应用程序的根模块_
- `app.service.ts` _具有单一方法的基本服务_
- `main.ts` _入口文件，核心函数`NestFactory`来创建 Nest 应用实例_

## Controllers

`nest g controller name`

_控制器负责处理传入的请求并将响应返回给客户端。_

_路由机制控制哪个控制器接收哪个请求。_

_通常，每个控制器具有多个路由，并且不同的路由可以执行不同的操作。_

## Service

`nest g service name`

## Module

`nest g module name`

## Dto

_如果使用`TypeScript`,我们需要确定`dto`模式（数据传输对象）。_

_`dto`是一个对象，它定义如何通过网络发送数据。_

_我们可以通过使用`TypeScript`接口或者简单的类来完成。_

_建议使用类，应为类是`ES6`标准的一部分，在`TypeScript`编译后的`JavaScript`中仍保留实体。_

_`TypeScript`接口在转换过程中被删除，所以`Nest`无法在运行时引用它们。_

## HttpCode

`201 Created` _请求成功，创建了新的资源。通常是在 Post、某些 Put 请求之后返回的响应。_

`204 No Content` _请求成功，客户端无需更新现有页面。204 响应默认会被浏览器缓存，响应需要包含头信息 ETag_

`200` _请求成功，客户端需要更新现有页面_

## Swagger
