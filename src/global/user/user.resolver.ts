import { UseGuards } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AccessTokenGuard } from '../../auth/guards/access-token.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserEntity, {
    description: 'Get current logged-in user',
  })
  @UseGuards(AccessTokenGuard)
  async me(@CurrentUser() user: { id: string }) {
    return this.userService.getUserById(user.id);
  }

  @Query(() => [UserEntity], {
    description: 'List all users (admin only)',
  })
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles('ADMIN')
  async users(
    @Args('skip', { type: () => Int, nullable: true }) skip = 0,
    @Args('take', { type: () => Int, nullable: true }) take = 10,
  ) {
    return this.userService.listUsers({ skip, take });
  }
}
