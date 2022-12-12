import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponseBody } from './ResponseBody';

export class BadRequestException extends HttpException {
    constructor(body?: Partial<ResponseBody>) {
        body = {
            ...{
                status: HttpStatus.BAD_REQUEST,
                type: 'BAD_REQUEST',
                title: 'Bad Request',
            },
            ...body,
        };

        super(body, body.status);
    }
}
