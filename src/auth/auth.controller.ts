import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { writeFile, writeFileSync } from "fs";
import { readFile } from "fs/promises";
import { userloginDTO, usersignupDTO } from "src/dto";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";


@Controller('auth')
export class authController {
    constructor(private authservice: AuthService) { }
    @Post('local/signin')
    async signin_local(@Body() user: userloginDTO) {
        return this.authservice.signin_local(user);
    }

    @Post('local/signup')
    @UseInterceptors(FileInterceptor('file'))
    async signup_local(@Body() user: usersignupDTO, @UploadedFile() file: Express.Multer.File) {
        var img: Buffer;
        if (!file) img = await readFile("default_profile.jpg")
        else {
            const ext = file.originalname.split('.')[1];
            if (!(ext == "png" || ext == "jpeg" || ext == "jpg")) throw new HttpException("Please uplaod a valid file type.", HttpStatus.BAD_REQUEST)
            img=file.buffer
        }
        writeFileSync("curr_user.png", img)
        return this.authservice.signup_local(user, img);
    }
}