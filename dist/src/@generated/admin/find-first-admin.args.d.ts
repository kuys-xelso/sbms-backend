import { AdminWhereInput } from './admin-where.input';
import { AdminOrderByWithRelationInput } from './admin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminScalarFieldEnum } from './admin-scalar-field.enum';
export declare class FindFirstAdminArgs {
    where?: AdminWhereInput;
    orderBy?: Array<AdminOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AdminWhereUniqueInput, 'id' | 'email' | 'username'>;
    take?: number;
    skip?: number;
    distinct?: Array<`${AdminScalarFieldEnum}`>;
}
