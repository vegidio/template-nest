import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
    constructor(@InjectRepository(Country) private countryRepository: Repository<Country>) {}

    findAll(): Promise<Country[]> {
        return this.countryRepository.find({ order: { name: { common: 'ASC' } } });
    }

    findOne(code: string): Promise<Country> {
        return this.countryRepository.findOneBy({ code });
    }
}
