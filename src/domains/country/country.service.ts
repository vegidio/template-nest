import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@src/exceptions';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
    constructor(@InjectRepository(Country) private countryRepository: Repository<Country>) {}

    findAll(): Promise<Country[]> {
        return this.countryRepository.find({ order: { name: { common: 'ASC' } } });
    }

    async findOne(code: string): Promise<Country> {
        const result = await this.countryRepository.findOneBy({ code });
        if (!result) throw new NotFoundException({ detail: 'No country found with this code' });
        return result;
    }
}
