import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { psModule } from './parking_space/ps.module';

@Module({
 imports:[psModule,MongooseModule.forRoot("mongodb+srv://user:user@cluster0.eqcxo.mongodb.net/mongo-demo?retryWrites=true&w=majority")]
})
export class AppModule {}
