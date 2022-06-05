import { IsJSON, IsNotEmpty, IsObject, IsString } from "class-validator"
import { isStringObject } from "util/types"

export class psDTO {
    @IsString()
    @IsNotEmpty()
    user_profile: string

    @IsNotEmpty()
    @IsJSON()
    location: string

    @IsNotEmpty()
    @IsString()
    photo: string
}

export class updateDTO{
    @IsNotEmpty()
    @IsString()
    image:string
}