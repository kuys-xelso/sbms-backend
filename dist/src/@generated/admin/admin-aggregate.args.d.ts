import { AdminWhereInput } from './admin-where.input';
import { AdminOrderByWithRelationInput } from './admin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminCountAggregateInput } from './admin-count-aggregate.input';
import { AdminMinAggregateInput } from './admin-min-aggregate.input';
import { AdminMaxAggregateInput } from './admin-max-aggregate.input';
export declare class AdminAggregateArgs {
    where?: AdminWhereInput;
    orderBy?: Array<AdminOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AdminWhereUniqueInput, 'id' | 'email' | 'username'>;
    take?: number;
    skip?: number;
    _count?: AdminCountAggregateInput;
    _min?: AdminMinAggregateInput;
    _max?: AdminMaxAggregateInput;
}
