import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { usersignupDTO, userloginDTO } from "../dto";
import { User } from "./user.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt'
import { isEmail } from "class-validator";
import { string } from "joi";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
@Injectable()
export class userServices {

    constructor(@InjectModel('users') private userModel: Model<User>) { }

    hashingPassword(rawPassword: string) {
        const salt = bcrypt.genSaltSync();
        return bcrypt.hashSync(rawPassword, salt);
    }
    async createuser(user: usersignupDTO) {

        try {
            const new_user = new this.userModel({
                username: user.username,
                email: user.email,
                password: this.hashingPassword(user.password),
                points: 0
            })
            await new_user.save()
            return new_user;
        }
        catch (error) {
            throw new HttpException("Invalid credentials", HttpStatus.AMBIGUOUS)
        }
    }

    async findloginuser(userlogin: userloginDTO) {
        var founduser = null
        if (isEmail(userlogin.emailname)) {
            founduser = await this.finduserbyemail(userlogin.emailname);
        }
        else {
            founduser = await this.finduserbyusername(userlogin.emailname);
        }

        if (!bcrypt.compareSync(userlogin.password, founduser.password)) {
            return null;
        }

        return founduser;
    }

    async finduserbyemail(email: string) {
        const user = this.userModel.findOne({ email: email })
        return user;
    }

    async finduserbyusername(username: string) {
        const user = this.userModel.findOne({ username: username })
        return user;
    }

}