import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedException } from '@src/exceptions';

export class RefreshTokenGuard extends AuthGuard('refresh-token') {
    constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handleRequest<TUser = any>(err: any, user: any, info: any): TUser {
        if (err || !user) {
            if (info.name === 'TokenExpiredError') {
                throw new UnauthorizedException({ type: 'JWT_EXPIRED', detail: 'The bearer token expired' });
            } else {
                throw new UnauthorizedException({ type: 'JWT_INVALID', detail: 'The bearer token is invalid' });
            }
        }

        return user;
    }
}
