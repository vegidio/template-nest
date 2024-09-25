import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AccessTokenGuard } from '@src/domains/auth/guard';
import { Token } from '@src/domains/auth/decorator';

@UseGuards(AccessTokenGuard)
@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => User, { name: 'me' })
    async findMe(@Token('sub') userId: number): Promise<User> {
        return this.userService.findOneById(userId);
    }
}
