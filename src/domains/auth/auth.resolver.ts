import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInRequestDto, TokenResponseDto } from './dto';
import { Token } from './decorator';
import { RefreshTokenGuard } from './guard';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => TokenResponseDto, { name: 'signIn' })
    signIn(@Args('dto') dto: SignInRequestDto): Promise<TokenResponseDto> {
        return this.authService.signIn(dto.email, dto.password);
    }

    @UseGuards(RefreshTokenGuard)
    @Query(() => TokenResponseDto, { name: 'refresh' })
    refresh(@Token('sub') userId: number): Promise<TokenResponseDto> {
        return this.authService.refresh(userId);
    }
}
