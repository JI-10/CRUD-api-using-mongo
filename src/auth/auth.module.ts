import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { userModule } from 'src/users/user.module';
import { userServices } from 'src/users/user.services';
import { authController } from './auth.controller';
import { AuthService } from './auth.service';
require('dotenv').config()

@Module({
  imports: [userModule,JwtModule],
  controllers: [authController],
  providers: [AuthService]
})
export class AuthModule { }
