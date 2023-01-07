import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext } from '@nestjs/common';
import { Request } from 'express-serve-static-core';

export const getRequest = (ctx: ExecutionContext): Request => {
    return ctx.getType() === 'http'
        ? ctx.switchToHttp().getRequest()
        : GqlExecutionContext.create(ctx).getContext().req;
};
