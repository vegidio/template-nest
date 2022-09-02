import { Injectable } from '@nestjs/common';
import { Country } from '@src/models';

@Injectable()
export class CountryService {
    findAll(): Promise<Country[]> {
        return Country.createQueryBuilder('country').orderBy(`country.name->>'common'`, 'ASC').getMany();
    }

    findOne(code: string): Promise<Country> {
        return Country.findOneBy({ code });
    }
}
