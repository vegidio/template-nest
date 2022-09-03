import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth';
import { CountryModule } from './country';
import { databaseOptions } from './config';

@Module({
    imports: [TypeOrmModule.forRoot(databaseOptions), AuthModule, CountryModule],
})
export class AppModule {}
