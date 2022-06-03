import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Ps } from "./ps.model";
import { psDTO } from "./dto";


@Injectable()
export class psService{

    constructor(@InjectModel('Ps') private psModel:Model<Ps> ){}

    async createPS(dto:psDTO){
        const ps = new this.psModel({user_profile:dto.user_profile,image:dto.photo,location:JSON.parse(dto.location)})
        await ps.save()
        return ps.id
    }

    async getPS(Id){
        
            const ps = this.psModel.findById(Id);
            if(ps!=null) 
                return ps
            else return new NotFoundException()
        
    }


}