import { Injectable, NotFoundException, ForbiddenException, BadRequestException, HttpStatus } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { InjectModel } from "@nestjs/mongoose";
import { Model, MongooseError } from "mongoose";
import { Ps } from "./ps.model";
import { psDTO, updateDTO } from "./dto";


@Injectable()
export class psService {

    constructor(@InjectModel('Ps') private psModel: Model<Ps>) { }


    async createPS(dto: psDTO) {
        try {
            const ps = new this.psModel({
                user_profile: dto.user_profile,
                image: dto.photo,
                location: JSON.parse(dto.location)
            })
            await ps.save()
            return ps.id
        } catch (err) {
                throw new ForbiddenException('Parking space with given location already exists.')
        }
    }
    
    async getPS(Id: string) {
        if (Id.length != 24) throw new ForbiddenException('Enter correct Id')
        const ps = await this.psModel.findById(Id)
        if (!ps) throw new NotFoundException('parking space not found')
        return ps
    }

    async updatePS(Id: string, image: string) {
        if (Id.length != 24) throw new ForbiddenException('Enter correct Id')
        try {
            const ps = await this.psModel.updateOne({ id: Id }, { image: image })
            if (ps.acknowledged)
                return await this.psModel.findById(Id)
        } catch (error) {
            throw new NotFoundException()
        }
    }
    async deletPS(Id: string) {
        if (Id.length != 24) throw new ForbiddenException('Enter correct Id')
        try {
            await this.psModel.deleteOne({ id: Id })
            return "parking space with given Id is deleted."
        } catch (error) {
            throw new NotFoundException()
        }
    }


}