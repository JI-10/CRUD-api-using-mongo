import { Body, Controller, Delete, Get, Param, Put, Post, UploadedFile, NestModule, UseInterceptors, BadRequestException, Request, UseGuards, UploadedFiles, ValidationPipe, HttpException, HttpCode, HttpStatus } from "@nestjs/common";
import { FileInterceptor, MulterModule } from "@nestjs/platform-express";
import { MulterField } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { url } from "inspector";
import { Mongoose } from "mongoose";
import { psDTO } from '../dto';
import { psService } from "./ps.service";
import { Express } from 'express'
import { diskStorage } from "multer";
import { EmptyError } from "rxjs";
import { userDTO } from "../dto/user.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { fileURLToPath } from "url";
import { fileValidation } from "src/file.validation";
import { Validate } from "class-validator";
import { fileTypeFromFile } from "file-type";



@Controller('ps')
export class psController {
    constructor(private psService: psService) { }
    currUser: userDTO = null


    @UseGuards(JwtAuthGuard)
    @Post('create')
    @UseInterceptors(FileInterceptor('file', {
        fileFilter: (req, file, cb) => {
            const ext = file.originalname.split('.')[1];
            if (ext == "png" || ext == "jpeg" || ext == "jpg")
                cb(null, true);
            else cb(null, false)
        }
    }))
    createPS(@Body() dto: psDTO,
        @UploadedFile() file: Express.Multer.File,
        @Request() req: any) {
        return this.psService.createPS(dto, file, req.user.id);
    }



    // @Post('create/upload')
    // @UseInterceptors(FileInterceptor('image',{
    //     storage:diskStorage({
    //         destination:'./uploads',
    //         filename:(req,image,cb)=>{
    //             const name=image.originalname.split('.')[0];
    //             const ext=image.originalname.split('.')[1]
    //             const file_name=name.split(' ').join('_')+('_')+Date.now()+'.'+ext;

    //             cb(null,file_name);
    //         },
    //     }),
    //     fileFilter:(req,image,cb)=>{
    //         if(!image.originalname.match(/\.(jpg|jpeg|png)$/)){
    //             return cb(null,false);
    //         }
    //         cb(null,true);
    //     }
    // }
    // ))
    // uploadImage(@UploadedFile() image: Express.Multer.File){
    //     if(image){

    //     }
    //     else throw new BadRequestException("Plase upload an image file.")
    // }

}