import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig';
import { UserModule } from '@app/user/user.module';
import { AuthMiddleware } from './user/middlewares/auth.middleware';

// module is for separating/splitting logic
// example module of article, module of authentication, module of popular text etc.
// wew can create a service of controller inside each model, and those will belong to that module
// we can make module_1 dependent on or use something from module_2. Or have no dependency
@Module({
  imports: [TagModule, UserModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController], // Dependency of AppModule
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
} // AppModule is main Module
