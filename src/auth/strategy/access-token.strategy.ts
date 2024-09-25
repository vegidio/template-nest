import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccessTokenDto } from '@src/auth/dto';
import { keys } from '@src/config';

/**
 * This class will be called every time a guard referencing this strategy is used, i.e. `@UseGuards(AccessTokenGuard)`.
 *
 * It will use an authentication `Strategy` (in this case, a strategy that comes from `passport-jwt`, but it could be
 * any other strategy from `passport-custom`, `passport-oauth`, etc.) to determine if a request is authenticated or not.
 * Each `Strategy`, depending on the package where they come from, will have a different type of `constructor` and
 * `validate`, with distinct parameters and returns.
 */
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
