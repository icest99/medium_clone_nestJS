import { TagService } from './tag.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tags') // add 'tags' as route. localhost:3000/tags
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}
