import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from './country.controller';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Country])],
    controllers: [CountryController],
    providers: [CountryService, CountryResolver],
})
export class CountryModule {}
