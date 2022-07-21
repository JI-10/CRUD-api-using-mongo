import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { psController } from "./ps.controller";
import { psService } from "./ps.service";
import { psSchema } from "./ps.model";

@Module({
    imports:[MongooseModule.forFeature([{name:'Ps',schema:psSchema}])],
    controllers:[psController],
    providers:[psService],
    
})
export class psModule{};

