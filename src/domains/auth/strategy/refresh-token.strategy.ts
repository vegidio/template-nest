import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { keys } from '@src/config';
import { RefreshTokenDto } from '@src/domains/auth/dto';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'refresh-token') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: keys.refreshToken.public,
        });
    }

    validate(payload: RefreshTokenDto): RefreshTokenDto {
        return payload;
    }
}
