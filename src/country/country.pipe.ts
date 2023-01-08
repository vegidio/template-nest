import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@src/exceptions';

@Injectable()
export class CountryCodePipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata): string {
        if (value.length != 3) {
            throw new BadRequestException({ detail: 'The country code must be 3 characters long' });
        }

        return value.toUpperCase();
    }
}
