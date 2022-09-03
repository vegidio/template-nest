import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';
import { User, UserService } from '@src/user';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async signIn(email: string, password: string): Promise<User> {
        const user = await this.userService.findOneByEmail(email);
        if (!user) throw new UnauthorizedException('Invalid user credentials');

        const pwMatched = await argon2.verify(user.hash, password);
        if (!pwMatched) throw new UnauthorizedException('Invalid user credentials');

        return user;
    }
}
