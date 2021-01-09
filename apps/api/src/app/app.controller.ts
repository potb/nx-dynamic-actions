import { Controller, Get } from '@nestjs/common';
import { dtos } from "@dynamic-matrix/dtos";

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get()
  getDtos() {
    return dtos()
  }
}
