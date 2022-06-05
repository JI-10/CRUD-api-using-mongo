import { Body, Controller, Delete, Get, Param, Put, Post } from "@nestjs/common";
import { url } from "inspector";
import { psDTO, updateDTO } from './dto';
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

    @Put(':id')
    updatePS(@Param('id') params:string,@Body() image:updateDTO){
        return this.psService.updatePS(params,image.image)
    }
    
    @Delete(':id')
    deletePS(@Param('id') params:string){
        return this.psService.deletPS(params)
    }
}