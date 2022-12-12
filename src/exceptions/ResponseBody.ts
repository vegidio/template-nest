import { HttpStatus } from '@nestjs/common';

/**
 * https://www.rfc-editor.org/rfc/rfc7807
 */
export class ResponseBody {
    status: HttpStatus;
    type: string;
    title: string;
    detail: string;
    instance: string;
}
