import { Injectable } from '@nestjs/common';
import { CountryDto } from './dto/country.dto';

@Injectable()
export class CountryService {
    findAll(): CountryDto[] {
        return [
            {
                code: 'BRA',
            },
        ];
    }

    findOne(code: string): CountryDto {
        return { code };
    }
}
