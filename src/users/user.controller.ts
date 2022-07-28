import { Body, Controller, Post, UseGuards,Get, Request } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { usersignupDTO,userloginDTO } from "../dto";
import { userServices } from "./user.services";


@Controller('user')
export class userController{

    constructor(private userService:userServices){}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return this.userService.finduserbyusername(req.user.username);
    }
      
}