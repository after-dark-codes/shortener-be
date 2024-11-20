import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlService {
  findAll(): string[] {
    return ['dragons', 'wizzards'];
  }
}
