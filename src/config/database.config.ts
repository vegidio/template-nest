import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '@src/domains/user';
import { Country } from '@src/domains/country';

export const databaseOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: 'countries',
    entities: [User, Country],
    synchronize: false,
};
