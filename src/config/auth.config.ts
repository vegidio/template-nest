import { JwtModuleOptions } from '@nestjs/jwt';
import { readFileSync } from 'fs';

const load = (fileName: string): string => {
    return readFileSync(`${__dirname}/../assets/certs/${fileName}.pem`, 'utf8').trim();
};

export const keys = {
    accessToken: {
        private: load('access-token-private'),
        public: load('access-token-public'),
    },
    refreshToken: {
        private: load('refresh-token-private'),
        public: load('refresh-token-public'),
    },
};

export const authOptions: JwtModuleOptions = {
    signOptions: { algorithm: 'ES256' },
};
