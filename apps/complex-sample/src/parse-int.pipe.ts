import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (!/^\d+$/.test(value)) {
      throw new BadRequestException('Id parameter should be a number.');
    }
    return Number.parseInt(value, 10);
  }
}
