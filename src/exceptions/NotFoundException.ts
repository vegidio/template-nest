import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponseBody } from './ResponseBody';

export class NotFoundException extends HttpException {
    constructor(body?: Partial<ResponseBody>) {
        body = {
            ...{
                status: HttpStatus.NOT_FOUND,
                type: 'NOT_FOUND',
                title: 'Not Found',
            },
            ...body,
        };

        super(body, body.status);
    }
}
