import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AccessTokenGuard } from '@src/auth/guard';
import { CountryService } from './country.service';
import { Country } from './country.entity';
import { CountryCodePipe } from './country.pipe';

@UseGuards(AccessTokenGuard)
@Resolver(() => Country)
export class CountryResolver {
    constructor(private readonly countryService: CountryService) {}

    @Query(() => [Country], { name: 'countries' })
    findAll(): Promise<Country[]> {
        return this.countryService.findAll();
    }

    @Query(() => Country, { name: 'country' })
    findOne(@Args('code', CountryCodePipe) code: string): Promise<Country> {
        return this.countryService.findOne(code);
    }
}
