import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiResponse, Response } from '@src/model';
import { Country } from './country.entity';
import { CountryCodePipe } from './country.pipe';
import { CountryService } from './country.service';
import { AccessTokenGuard } from '@src/domains/auth/guard';

@ApiTags('Countries')
@ApiBearerAuth()
@UseGuards(AccessTokenGuard)
@Controller({ path: 'countries', version: '1' })
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    @ApiResponse(Country, 'array')
    async findAll(): Promise<Response<Country[]>> {
        const data = await this.countryService.findAll();
        return new Response({ data });
    }

    @Get(':code')
    @ApiResponse(Country)
    async findOne(@Param('code', CountryCodePipe) code: string): Promise<Response<Country>> {
        const data = await this.countryService.findOne(code);
        return new Response({ data });
    }
}
