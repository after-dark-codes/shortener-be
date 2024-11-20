import { UrlService } from './url.service';
import { Controller, Get } from '@nestjs/common';

@Controller('urls')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get()
  findAll(): string[] {
    return this.urlService.findAll();
  }
}
