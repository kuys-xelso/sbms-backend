import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';
import { SignUpInput } from './dto/signup.input';
import { AuthEntity } from './entities/auth.entity';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from './guards/access-token.guard';
import { CurrentUser } from './decorators/current-user.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthEntity, {
    description: 'Register new user account',
  })
  async signup(@Args('input') input: SignUpInput) {
    return this.authService.signup(input);
  }

  @Mutation(() => AuthEntity, {
    description: 'Login with email and password',
  })
  async signin(@Args('input') input: SignInInput) {
    return this.authService.signin(input);
  }

  @Mutation(() => AuthEntity, {
    description: 'Rotate tokens using refresh token',
  })
  async refreshAccessToken(@Args('refreshToken') refreshToken: string) {
    return this.authService.refreshAccessToken(refreshToken);
  }

  @Mutation(() => Boolean, {
    description: 'Logout current user and invalidate refresh token',
  })
  @UseGuards(AccessTokenGuard)
  async logout(@CurrentUser() user: { id: string }) {
    return this.authService.logout(user.id);
  }
}
