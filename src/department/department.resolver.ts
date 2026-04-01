import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from '../auth/decorators/roles.decorator';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Department } from './entities/department.entity';
import { DepartmentService } from './department.service';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query(() => [Department], {
    description: 'List departments',
  })
  @UseGuards(AccessTokenGuard)
  async departments() {
    return this.departmentService.listDepartments();
  }

  @Mutation(() => Department, {
    description: 'Create department (admin only)',
  })
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles('ADMIN')
  async createDepartment(
    @Args('name') name: string,
    @Args('description', { nullable: true }) description?: string,
  ) {
    return this.departmentService.createDepartment(name, description);
  }
}
