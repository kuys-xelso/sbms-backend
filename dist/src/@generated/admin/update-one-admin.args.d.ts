import { AdminUpdateInput } from './admin-update.input';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
export declare class UpdateOneAdminArgs {
    data: AdminUpdateInput;
    where: Prisma.AtLeast<AdminWhereUniqueInput, 'id' | 'email' | 'username'>;
}
