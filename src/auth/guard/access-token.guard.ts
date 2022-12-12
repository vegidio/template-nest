import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common';
import { UnauthorizedException } from '@src/exceptions';

export class AccessTokenGuard extends AuthGuard('access-token') {
    constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext, status?: any): TUser {
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
