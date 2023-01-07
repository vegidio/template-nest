import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedException } from '@src/exceptions';
import { getRequest } from '@src/utils';
import { Request } from 'express-serve-static-core';

export class AccessTokenGuard extends AuthGuard('access-token') {
    constructor() {
        super();
    }

    getRequest(context: ExecutionContext): Request {
        return getRequest(context);
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
