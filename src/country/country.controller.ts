import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Country } from './country.entity';
import { CountryCodePipe } from './country.pipe';
import { CountryService } from './country.service';
import { JwtGuard } from '@src/auth/guard';

@UseGuards(JwtGuard)
@Controller({ path: 'countries', version: '1' })
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    findAll(): Promise<Country[]> {
        return this.countryService.findAll();
    }

    @Get(':code')
    findOne(@Param('code', CountryCodePipe) code: string): Promise<Country> {
        return this.countryService.findOne(code);
    }
}
