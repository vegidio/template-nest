import { ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '@src/auth/guard';
import { Token } from '@src/auth/decorator';
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
    findMe(@Token('sub') userId: number): Promise<User> {
        return this.userService.findOneById(userId);
    }
}
