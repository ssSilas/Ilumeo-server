import { Inject, Injectable } from '@nestjs/common';
import { CheckInEntity } from './check-in.entity';
import { UsersEntity } from '../user/user.entity'
import * as dayjs from "dayjs";
import { UserService } from 'src/user/user.service';

@Injectable()
export class CheckInService {
  constructor(
    @Inject('CheckInEntity')
    private checkinRepo: typeof CheckInEntity,

    private readonly userService : UserService
  ) { }

  async findAll(usercode: string) {
    const user = await this.userService.findByUserfk(usercode)
    return this.checkinRepo.findAll({
      where: { userfk: user.id },
      order:[
        ['date', 'DESC'],
        ['time', 'ASC']
      ]
    })
  }
  async create(user: string) {
    const date = dayjs()
    const time = dayjs().format('HH:mm')
    // const seconds = this.timeTosecond(time)

    const idUser = await this.userService.findByUserfk(user)

    return await this.checkinRepo.create({
      time: time,
      date,
      userfk: idUser.id
    })
  }

  timeTosecond(time: string) {
    const hours = parseInt(time.split(':')[0])
    const minutes = parseInt(time.split(':')[1])
    return (hours * 60 * 60) + (minutes * 60)
  }
}
