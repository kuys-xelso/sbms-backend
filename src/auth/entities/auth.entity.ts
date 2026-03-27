import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from '../../global/user/entities/user.entity';

@ObjectType()
export class AuthEntity {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => UserEntity)
  user: UserEntity;
}
