import { Injectable } from '@nestjs/common';

// business logic will be inside service.ts files

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['dragons', 'coffee', 'weather'];
  }
}

// service can't be use inside controller. but it can be register to module. with:
// providers: [TagService],
// once register to module, it can be use inside controller
