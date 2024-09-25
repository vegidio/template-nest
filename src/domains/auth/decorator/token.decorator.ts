import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getRequest } from '@src/utils';

export const Token = createParamDecorator((data: string | undefined, ctx: ExecutionContext) => {
    const request = getRequest(ctx);
    if (data) return request.user[data];
    return request.user;
});
