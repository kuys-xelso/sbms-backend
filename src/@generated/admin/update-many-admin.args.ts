import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUpdateManyMutationInput } from './admin-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdminWhereInput } from './admin-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAdminArgs {

    @Field(() => AdminUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminUpdateManyMutationInput)
    data!: AdminUpdateManyMutationInput;

    @Field(() => AdminWhereInput, {nullable:true})
    @Type(() => AdminWhereInput)
    where?: AdminWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
