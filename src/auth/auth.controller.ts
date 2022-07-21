import { Body, Controller, Post } from "@nestjs/common";
import { userloginDTO, usersignupDTO } from "src/dto";
import { AuthService } from "./auth.service";


@Controller('auth')
export class authController{
    constructor(private authservice:AuthService){}

    @Post('local/signin')
    signin_local(@Body() user:userloginDTO){
        return this.authservice.signin_local(user);
    }

    @Post('local/signup')
    signup_local(@Body() user:usersignupDTO){
        return this.authservice.signup_local(user);
    }
}