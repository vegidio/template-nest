import { ApiExtraModels, ApiOkResponse, ApiPropertyOptional, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';
import { Error } from '@src/model';

export class Response<T> {
    @ApiPropertyOptional()
    data?: T;

    @ApiPropertyOptional()
    error?: Error;

    constructor(init?: Partial<Response<T>>) {
        Object.assign(this, init);
    }
}

export const ApiResponse = <Response extends Type<unknown>>(
    response: Response,
    type: 'object' | 'array' = 'object',
): any => {
    let schema: unknown;

    if (type == 'object') {
        schema = {
            properties: {
                data: {
                    $ref: getSchemaPath(response),
                },
            },
        };
    } else {
        schema = {
            properties: {
                data: {
                    type: 'array',
                    items: { $ref: getSchemaPath(response) },
                },
            },
        };
    }

    return applyDecorators(ApiExtraModels(Response, response), ApiOkResponse({ schema }));
};
