import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { CountryModule } from '@src/domains/country';
import { AuthModule } from '@src/domains/auth';
import { databaseOptions, graphqlConfig } from './config';

@Module({
    imports: [TypeOrmModule.forRoot(databaseOptions), GraphQLModule.forRoot(graphqlConfig), AuthModule, CountryModule],
})
export class AppModule {}
