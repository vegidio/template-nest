import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CountryCodePipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata): string {
        if (value.length != 3) {
            throw new BadRequestException('The country code must be 3 characters long');
        }

        return value.toUpperCase();
    }
}
