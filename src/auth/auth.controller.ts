import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { User } from '@src/user';
import { AuthService } from './auth.service';
import { AuthSignInDto } from './dto/auth-signin.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    @HttpCode(200)
    signIn(@Body() dto: AuthSignInDto): Promise<User> {
        return this.authService.signIn(dto.email, dto.password);
    }
}
