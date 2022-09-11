import { JwtModuleOptions } from '@nestjs/jwt';
import { User } from '@src/user';
import { Country } from '@src/country';

export const authOptions: JwtModuleOptions = {
    secret: 'vinicius',
};
