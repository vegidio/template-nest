import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInResponseDto, SignInRequestDto } from './dto';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    @HttpCode(200)
    signIn(@Body() dto: SignInRequestDto): Promise<SignInResponseDto> {
        return this.authService.signIn(dto.email, dto.password);
    }
}
