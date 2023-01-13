import { ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '@src/auth/guard';
import { Token } from '@src/auth/decorator';
import { ApiResponse, Response } from '@src/model';
import { UserService } from './user.service';
import { User } from './user.entity';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AccessTokenGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller({ path: 'users', version: '1' })
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('me')
    @ApiResponse(User)
    async findMe(@Token('sub') userId: number): Promise<Response<User>> {
        const data = await this.userService.findOneById(userId);
        return new Response({ data });
    }
}
