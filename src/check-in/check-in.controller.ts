import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CheckInService } from './check-in.service';

@Controller('check-in')
export class CheckInController {
  constructor(private readonly checkInService: CheckInService) { }

  @Get()
  async findAll(@Query('user') user: string) {
    return await this.checkInService.findAll(user)
  }
  @Post('create')
  async create(@Body('user') user: string) {
    return await this.checkInService.create(user)
  }
}
