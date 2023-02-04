import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig';

// module is for separating/splitting logic
// example module of article, module of authentication, module of popular text etc.
// wew can create a service of controller inside each model, and those will belong to that module
// we can make module_1 dependent on or use something from module_2. Or have no dependency
@Module({
  imports: [TagModule, UserModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController], // Dependency of AppModule
  providers: [AppService],
})
export class AppModule {} // AppModule is main Module
