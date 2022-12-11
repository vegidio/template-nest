import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccessTokenDto } from '@src/auth/dto';
import { keys } from '@src/config';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'access-token') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: keys.accessToken.public,
        });
    }

    validate(payload: AccessTokenDto): AccessTokenDto {
        return payload;
    }
}
