import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { userServices } from 'src/users/user.services';
import { userloginDTO, usersignupDTO, userDTO } from 'src/dto';
import { User } from 'src/users/user.model';
import { JwtService } from '@nestjs/jwt';
import { create } from 'domain';
import { readFile } from 'fs';
import { toNamespacedPath } from 'path';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userServices: userServices) { }

    async signin_local(user: userloginDTO) {
        const founduser = await this.userServices.findloginuser(user);
        if (!founduser) throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED)
        return this.jwt(founduser.username, founduser.id, founduser.password);
    };

    async signup_local(user: usersignupDTO, file:Buffer) {
        const createuser = await this.userServices.createuser(user,file);
        return this.jwt(createuser.username, createuser.id, createuser.password);
    };


    jwt(username: string, id: string, password: string) {
        return this.jwtService.signAsync({
            sub: id,
            name: username,
            password: password
        })
    }
}
