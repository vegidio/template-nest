import { JwtModuleOptions } from '@nestjs/jwt';

const privateKey = `
-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg9v1cZXIZlNXj/Oc+
tbGKddEPH1CpBIuPAF3BtmBlKsihRANCAATdLMz7SxADKi2iJC3n1rFdQam+WaVt
hFSkEr6AlNscFTz7I0GDS13RzgivREykKzeU/KtHF0p8uVNXoW45hPrC
-----END PRIVATE KEY-----
`.trim();

const publicKey = `
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE3SzM+0sQAyotoiQt59axXUGpvlml
bYRUpBK+gJTbHBU8+yNBg0td0c4Ir0RMpCs3lPyrRxdKfLlTV6FuOYT6wg==
-----END PUBLIC KEY-----
`.trim();

export const authOptions: JwtModuleOptions = {
    privateKey,
    publicKey,
    signOptions: { algorithm: 'ES256' },
};
