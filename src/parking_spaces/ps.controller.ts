import { Body, Controller, Delete, Get, Param, Put, Post, UploadedFile, NestModule, UseInterceptors, BadRequestException } from "@nestjs/common";
import { FileInterceptor, MulterModule } from "@nestjs/platform-express";
import { MulterField } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { url } from "inspector";
import { Mongoose } from "mongoose";
import { psDTO } from '../dto';
import { psService } from "./ps.service";
import {Express} from 'express'
import { diskStorage } from "multer";
import { EmptyError } from "rxjs";
import { userDTO } from "../dto/user.dto";



@Controller('ps')
export class psController{
    constructor(private psService:psService){}
    currUser:userDTO=null

    @Post('create')
    createPS(@Body() dto:psDTO){
       return this.psService.createPS(dto)
    }
    @Post('create/upload')
    @UseInterceptors(FileInterceptor('image',{
        storage:diskStorage({
            destination:'./uploads',
            filename:(req,image,cb)=>{
                const name=image.originalname.split('.')[0];
                const ext=image.originalname.split('.')[1]
                const file_name=name.split(' ').join('_')+('_')+Date.now()+'.'+ext;

                cb(null,file_name);
            },
        }),
        fileFilter:(req,image,cb)=>{
            if(!image.originalname.match(/\.(jpg|jpeg|png)$/)){
                return cb(null,false);
            }
            cb(null,true);
        }
    }
    ))
    uploadImage(@UploadedFile() image: Express.Multer.File){
        if(image){

        }
        else throw new BadRequestException("Plase upload an image file.")
    }
    @Get('get-all')
    getall(){
        return this.psService.getall()
    }

    @Get(':id')
    readPS( @Param('id') params:string ){
        return this.psService.getPS(params)
    }

    // @Put(':id')
    // updatePS(@Param('id') params:string,@Body() image:updateDTO){
    //     return this.psService.updatePS(params,image.image)
    // }

    @Delete('delete-all')
    deleteall(){
        return this.psService.deletall()
    }
    
    @Delete(':id')
    deletePS(@Param('id') params:string){
        return this.psService.deletPS(params)
    }
}