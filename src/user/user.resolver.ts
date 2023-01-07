import { Query, Resolver } from '@nestjs/graphql';
import { Token } from '@src/auth/decorator';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from '@src/auth/guard';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AccessTokenGuard)
    @Query(() => User)
    async me(@Token('sub') userId: number): Promise<User> {
        return this.userService.findOneById(userId);
    }
}
