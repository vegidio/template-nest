import { ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AccessTokenGuard } from '@src/auth/guard';
import { Token } from '@src/auth/decorator';

@UseInterceptors(ClassSerializerInterceptor)
@Controller({ path: 'users', version: '1' })
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AccessTokenGuard)
    @Get('me')
    findMe(@Token('sub') userId: number): Promise<User> {
        return this.userService.findOneById(userId);
    }
}
