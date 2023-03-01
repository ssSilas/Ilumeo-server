import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configEnv from 'config/config.env';
import { AuthModule } from './auth/auth.module';
import { CheckInEntity } from './check-in/check-in.entity';
import { CheckInModule } from './check-in/check-in.module';
import { UsersEntity } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configEnv]
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: configEnv().dataBase.host,
      username: configEnv().dataBase.user,
      password: configEnv().dataBase.password,
      database: configEnv().dataBase.dbName,
      models: [UsersEntity, CheckInEntity],
      // autoLoadModels: true,
      // synchronize: true,
      define: {
        freezeTableName: true,
        timestamps: false
      }
    }),
    AuthModule,
    CheckInModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
