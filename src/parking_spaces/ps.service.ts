import { Injectable, NotFoundException, ForbiddenException, BadRequestException, HttpStatus, HttpException } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { InjectModel } from "@nestjs/mongoose";
import { Model, MongooseError } from "mongoose";
import { Ps } from "./ps.model";
import { psDTO } from "../dto";
import { extname } from "path";
import {Express} from 'express'
import { userServices } from "src/users/user.services";
import { fileTypeFromBuffer } from "file-type";


@Injectable()
export class psService {

    constructor(@InjectModel('Ps') private psModel: Model<Ps>,private userServices:userServices) { }


    async createPS(dto: psDTO,file:Express.Multer.File,userid:string) {
        try { 
                const ps = new this.psModel({
                user_suggested: userid,
                image: file.buffer,
                location: JSON.parse(dto.location)
            })
            await ps.save()
            await this.userServices.updatePoints(userid);
            return true;
        } catch (err) {
            if(!file) throw new HttpException("Please uplaod a valid file type",HttpStatus.BAD_GATEWAY)
            else throw new ForbiddenException('Parking space with given location already exists.')
        }
    }


}