import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponseBody } from './ResponseBody';

export class UnauthorizedException extends HttpException {
    constructor(body?: Partial<ResponseBody>) {
        body = {
            ...{
                status: HttpStatus.UNAUTHORIZED,
                type: 'UNAUTHORIZED',
                title: 'Unauthorized',
            },
            ...body,
        };

        super(body, body.status);
    }
}
