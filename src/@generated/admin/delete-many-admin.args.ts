import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAdminArgs {

    @Field(() => AdminWhereInput, {nullable:true})
    @Type(() => AdminWhereInput)
    where?: AdminWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
