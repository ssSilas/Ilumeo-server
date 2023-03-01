import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(){
    return await this.userService.create()
  }

  @Post('login')
  async login(@Body('user') user:string){
    return await this.userService.login(user)
  }
}
