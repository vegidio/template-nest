import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { User, UserService } from '@src/user';
import { AccessTokenDto, SignInResponseDto } from './dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

    async signIn(email: string, password: string): Promise<SignInResponseDto> {
        const user = await this.userService.findOneByEmail(email);
        if (!user) throw new UnauthorizedException('Invalid user credentials');

        const pwMatched = await argon2.verify(user.hash, password);
        if (!pwMatched) throw new UnauthorizedException('Invalid user credentials');

        return this.createToken(user);
    }

    // region - Private methods
    createToken(user: User): SignInResponseDto {
        const payload: AccessTokenDto = {
            sub: user.id,
            username: user.username,
        };

        return {
            accessToken: this.jwtService.sign(payload, { expiresIn: '1h' }),
            expires: 3600,
        };
    }
    // endregion
}
