import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Country, User } from '@src/models';

export const databaseOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: 'countries',
    entities: [Country, User],
    synchronize: true,
};
