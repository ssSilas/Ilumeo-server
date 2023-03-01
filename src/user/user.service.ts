import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import ShortUniqueId from 'short-unique-id';
import { UsersEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('UsersEntity')
    private userRepo: typeof UsersEntity
  ) { }

  async login(user:string) {
    const isValid = await this.findByUserfk(user)

    if (!isValid) {
      throw new UnauthorizedException({error: "Código de usuário não existe"});
    }
    return isValid
  }

  async create() {
    const code = new ShortUniqueId({ length: 7 })
    return await this.userRepo.create({
      usercode: code()
    })
  }

  async findByUserfk(usercode:string) {
    const user = await this.userRepo.findOne({
      raw: true,
      where: { usercode }
    })
    return user
  }
}
