import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminCreateInput } from './admin-create.input';
import { AdminUpdateInput } from './admin-update.input';
export declare class UpsertOneAdminArgs {
    where: Prisma.AtLeast<AdminWhereUniqueInput, 'id' | 'email' | 'username'>;
    create: AdminCreateInput;
    update: AdminUpdateInput;
}
