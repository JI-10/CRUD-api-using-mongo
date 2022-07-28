import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { psController } from "./ps.controller";
import { psService } from "./ps.service";
import { psSchema } from "./ps.model";
import { AuthModule } from "src/auth/auth.module";
import { userModule } from "src/users/user.module";

@Module({
    imports:[MongooseModule.forFeature([{name:'Ps',schema:psSchema}]),AuthModule,userModule],
    controllers:[psController],
    providers:[psService],
    
})
export class psModule{};

