import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { userController } from "./user.controller";
import { userSchema } from "./user.model";
import { userServices } from "./user.services";

@Module({
    imports:[MongooseModule.forFeature([{name:'users',schema:userSchema}])],
    controllers:[userController],
    providers:[userServices],
    exports:[userServices],
})
export class userModule{};

