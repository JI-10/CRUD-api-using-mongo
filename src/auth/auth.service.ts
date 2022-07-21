import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { userServices } from 'src/users/user.services';
import { userloginDTO,usersignupDTO,userDTO } from 'src/dto';
import { User } from 'src/users/user.model';
import { JwtService } from '@nestjs/jwt';
import { create } from 'domain';

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService,private userServices:userServices){}

    async signin_local(user:userloginDTO){
        const founduser= await this.userServices.findloginuser(user);
        if(!founduser) throw new HttpException("Invalid credentials",HttpStatus.UNAUTHORIZED)
        return this.jwt(founduser.username,founduser.id,founduser.password);
    };

    async signup_local(user:usersignupDTO){
        const createuser= await this.userServices.createuser(user);
        if(!createuser) throw new HttpException("Invalid credentials",HttpStatus.NOT_ACCEPTABLE)
        return this.jwt(createuser.username,createuser.id,createuser.password);
    };

    

    async jwt(username:string,id:string,password:string){
        return this.jwtService.sign({
            sub:id,
            name:username,
            password:password
        })
    }
}
