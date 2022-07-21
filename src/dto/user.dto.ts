import { IsEmail, IsNotEmpty, IsPassportNumber } from "class-validator"


export class userDTO{
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    
    password: string

    points: number

    image: JSON

}

export class userloginDTO{
    @IsNotEmpty()
    emailname: string

    @IsNotEmpty()
    password: string
}

export class usersignupDTO{
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    password:string

}