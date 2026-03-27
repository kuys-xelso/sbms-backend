import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';
import { SignUpInput } from './dto/signup.input';
import { AuthEntity } from './entities/auth.entity';

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

  @Mutation(() => String, {
    description: 'Get new access token using refresh token',
  })
  async refreshAccessToken(@Args('refreshToken') refreshToken: string) {
    return this.authService.refreshAccessToken(refreshToken);
  }
}
