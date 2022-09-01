import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryDto } from './dto/country.dto';

@Controller('countries')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    findAll(): CountryDto[] {
        return this.countryService.findAll();
    }

    @Get(':code')
    findOne(@Param('code') code: string): CountryDto {
        return this.countryService.findOne(code);
    }
}
