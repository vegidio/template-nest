import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { User, UserService } from '@src/user';
import { keys } from '@src/config';
import { AccessTokenDto, RefreshTokenDto, TokenResponseDto } from './dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

    async signIn(email: string, password: string): Promise<TokenResponseDto> {
        const user = await this.userService.findOneByEmail(email);
        if (!user) throw new UnauthorizedException('Invalid user credentials');

        const pwMatched = await argon2.verify(user.hash, password);
        if (!pwMatched) throw new UnauthorizedException('Invalid user credentials');

        return this.createToken(user);
    }

    async refresh(userId: number): Promise<TokenResponseDto> {
        const user = await this.userService.findOneById(userId);
        return this.createToken(user);
    }

    // region - Private methods
    createToken(user: User): TokenResponseDto {
        const accessPayload: AccessTokenDto = {
            sub: user.id,
            username: user.username,
        };

        const refreshPayload: RefreshTokenDto = {
            sub: user.id,
        };

        return {
            accessToken: this.jwtService.sign(accessPayload, {
                privateKey: keys.accessToken.private,
                expiresIn: '1h',
            }),
            refreshToken: this.jwtService.sign(refreshPayload, {
                privateKey: keys.refreshToken.private,
                expiresIn: '1d',
            }),
        };
    }
    // endregion
}
