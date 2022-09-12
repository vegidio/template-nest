import { ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtGuard } from '@src/auth/guard';
import { AccessToken } from '@src/auth/decorator';

@UseInterceptors(ClassSerializerInterceptor)
@Controller({ path: 'users', version: '1' })
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtGuard)
    @Get('me')
    async findMe(@AccessToken('sub') userId: number): Promise<User> {
        return await this.userService.findOneById(userId);
    }
}
