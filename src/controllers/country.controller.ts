import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from '@src/services';
import { Country } from '@src/models';

@Controller('countries')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    findAll(): Promise<Country[]> {
        return this.countryService.findAll();
    }

    @Get(':code')
    findOne(@Param('code') code: string): Promise<Country> {
        return this.countryService.findOne(code.toUpperCase());
    }
}
