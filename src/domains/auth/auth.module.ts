import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { authOptions } from '@src/config';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategy';
import { UserModule } from '@src/domains/user';

@Module({
    imports: [JwtModule.register(authOptions), UserModule],
    controllers: [AuthController],
    providers: [AuthService, AuthResolver, AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
