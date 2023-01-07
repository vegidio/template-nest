import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth';
import { CountryModule } from './country';
import { databaseOptions, graphqlConfig } from './config';

@Module({
    imports: [TypeOrmModule.forRoot(databaseOptions), GraphQLModule.forRoot(graphqlConfig), AuthModule, CountryModule],
})
export class AppModule {}
