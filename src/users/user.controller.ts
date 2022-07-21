import { Body, Controller, Post, UseGuards,Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { usersignupDTO,userloginDTO } from "../dto";
import { userServices } from "./user.services";


@Controller('user')
export class userController{

    constructor(private userService:userServices){}

    // @UseGuards(JwtAuthGuard)
    // @Post('profile')
    // sayhello(){
    //     return "Hello user!";
    // }
    @Post('signup')
    signup(@Body() user:usersignupDTO){
        return this.userService.createuser(user);
    }

    // @Post('signin')
    // signin(@Body() user:userloginDTO){
    //     return this.userService.findloginuser(user);
    // }

    
}