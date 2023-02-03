import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TagController], //dependency injection, TagController is what considered as 'isolated' stuff
  providers: [TagService],
})
export class TagModule {}
