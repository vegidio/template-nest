import { HttpException, HttpStatus } from '@nestjs/common';
import { Error } from '@src/model';

export class BadRequestException extends HttpException {
    constructor(body?: Partial<Error>) {
        body = {
            ...{
                status: HttpStatus.BAD_REQUEST,
                type: 'BAD_REQUEST',
                title: 'Bad Request',
            },
            ...body,
        };

        super({ error: body }, body.status);
    }
}
