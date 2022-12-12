import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator((data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (data) return request.user[data];
    return request.user;
});
