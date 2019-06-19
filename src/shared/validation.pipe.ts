import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class validationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {

    }
}