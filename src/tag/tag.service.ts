import { TagEntity } from './tag.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// business logic will be inside service.ts files

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity) //repository help us work with database, injectReposity(TagEntity) means we want our tag repository to work with tags table
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }
}

// service can't be use inside controller. but it can be register to module. with:
// providers: [TagService],
// once register to module, it can be use inside controller
