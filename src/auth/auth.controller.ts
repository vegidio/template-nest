import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RefreshTokenGuard } from './guard/refresh-token.guard';
import { SignInRequestDto, TokenResponseDto } from './dto';
import { Token } from './decorator';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    @HttpCode(200)
    signIn(@Body() dto: SignInRequestDto): Promise<TokenResponseDto> {
        return this.authService.signIn(dto.email, dto.password);
    }

    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    refresh(@Token('sub') userId: number): Promise<TokenResponseDto> {
        return this.authService.refresh(userId);
    }
}
