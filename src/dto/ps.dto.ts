import { IsJSON, IsNotEmpty, IsObject, IsString } from "class-validator"
import { isStringObject } from "util/types"

export class psDTO {
    @IsString()
    @IsNotEmpty()
    user_suggested: string

    @IsNotEmpty()
    @IsJSON()
    location: string

    @IsNotEmpty()
    image: JSON

    @IsNotEmpty()
    tags: Array<string>

    description: string

}

