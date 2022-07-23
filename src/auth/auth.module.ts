import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { userModule } from 'src/users/user.module';
import { userServices } from 'src/users/user.services';
import { authController } from './auth.controller';
import { AuthService } from './auth.service';
import {PassportModule} from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy';
require('dotenv').config()

@Module({
  imports: [userModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '10m' },
    }),
  ],
  controllers: [authController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule { }
