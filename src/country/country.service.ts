import { Injectable } from '@nestjs/common';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
    findAll(): Promise<Country[]> {
        return Country.find({ order: { name: { common: 'ASC' } } });
    }

    findOne(code: string): Promise<Country> {
        return Country.findOneBy({ code });
    }
}
