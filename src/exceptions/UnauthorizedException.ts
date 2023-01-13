import { HttpException, HttpStatus } from '@nestjs/common';
import { Error } from '@src/model';

export class UnauthorizedException extends HttpException {
    constructor(body?: Partial<Error>) {
        body = {
            ...{
                status: HttpStatus.UNAUTHORIZED,
                type: 'UNAUTHORIZED',
                title: 'Unauthorized',
            },
            ...body,
        };

        super({ error: body }, body.status);
    }
}
