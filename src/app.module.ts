import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';

// module is for separating/splitting logic
// example module of article, module of authentication, module of popular text etc.
// wew can create a service of controller inside each model, and those will belong to that module
// we can make module_1 dependent on or use something from module_2. Or have no dependency
@Module({
  imports: [TagModule],
  controllers: [AppController], // Dependency of AppModule
  providers: [AppService],
})
export class AppModule { } // AppModule is main module
