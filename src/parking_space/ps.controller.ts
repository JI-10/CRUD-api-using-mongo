import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { url } from "inspector";
import { psDTO } from './dto';
import { psService } from "./ps.service";

@Controller('ps')
export class psController{
    constructor(private psService:psService){ }
    @Post('create')
    createPS(@Body() dto:psDTO){
       return this.psService.createPS(dto)
    }

    @Get(':id')
    readPS( @Param('id') params:string ){
        return this.psService.getPS(params)
    }

    @Patch()
    updatePS(@Body() dto:psDTO){
        return "updating parking space"
    }
    
    @Delete()
    deletePS(){
        return "deleting parking space"
    }
}