import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { psModule } from './parking_spaces/ps.module';
import { userModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
require('dotenv').config()
@Module({
    imports: [
        // ConfigModule.forRoot({isGlobal: true,}), 
        ScheduleModule.forRoot(), 
        psModule, userModule, 
        MongooseModule.forRoot("mongodb://localhost:27017/Database"), 
        // AuthModule
    ]
})
export class AppModule { }
