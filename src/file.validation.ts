import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class fileValidation implements PipeTransform{
    private validext={"jpeg":String,"jpg":String,"png":String};

    transform(value: any, metadata: ArgumentMetadata) {
        const ext = value.name.split('.')[1];
        if(ext=="jpeg"||ext=="jpg"||ext=="png") return true;
        return false;
    }
}