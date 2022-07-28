import { IsJSON, IsNotEmpty, IsObject, IsString } from "class-validator"
import { isStringObject } from "util/types"

export class psDTO {
    @IsNotEmpty()
    @IsJSON()
    location: string

    @IsNotEmpty()
    tags: Array<string>

    description: string

}

