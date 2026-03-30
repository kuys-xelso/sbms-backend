import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DepartmentEntity {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
