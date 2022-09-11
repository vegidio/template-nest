import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtGuard } from '@src/auth/guard';
import { AccessToken } from '@src/auth/decorator';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtGuard)
    @Get('me')
    async findMe(@AccessToken('sub') userId: number): Promise<User> {
        const user = await this.userService.findOneById(userId);
        delete user.hash;
        return user;
    }
}
