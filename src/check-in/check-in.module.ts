import { Module } from '@nestjs/common';
import { CheckInService } from './check-in.service';
import { CheckInController } from './check-in.controller';
import { CheckInEntity } from './check-in.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[UserModule],
  controllers: [CheckInController],
  providers: [
    CheckInService,
    {
      provide: 'CheckInEntity',
      useValue: CheckInEntity
    }
  ],
  exports: [CheckInService, 'CheckInEntity']
})
export class CheckInModule { }
