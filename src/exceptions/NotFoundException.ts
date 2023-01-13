import { HttpException, HttpStatus } from '@nestjs/common';
import { Error } from '@src/model';

export class NotFoundException extends HttpException {
    constructor(body?: Partial<Error>) {
        body = {
            ...{
                status: HttpStatus.NOT_FOUND,
                type: 'NOT_FOUND',
                title: 'Not Found',
            },
            ...body,
        };

        super({ error: body }, body.status);
    }
}
