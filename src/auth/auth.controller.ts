import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiResponse, Response } from '@src/model';
import { AuthService } from './auth.service';
import { RefreshTokenGuard } from './guard';
import { SignInRequestDto, TokenResponseDto } from './dto';
import { Token } from './decorator';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    @HttpCode(200)
    @ApiResponse(TokenResponseDto)
    async signIn(@Body() dto: SignInRequestDto): Promise<Response<TokenResponseDto>> {
        const data = await this.authService.signIn(dto.email, dto.password);
        return new Response({ data });
    }

    @Get('refresh')
    @UseGuards(RefreshTokenGuard)
    @ApiBearerAuth()
    @ApiResponse(TokenResponseDto)
    async refresh(@Token('sub') userId: number): Promise<Response<TokenResponseDto>> {
        const data = await this.authService.refresh(userId);
        return new Response({ data });
    }
}
