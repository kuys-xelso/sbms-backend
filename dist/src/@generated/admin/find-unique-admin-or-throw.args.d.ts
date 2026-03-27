import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
export declare class FindUniqueAdminOrThrowArgs {
    where: Prisma.AtLeast<AdminWhereUniqueInput, 'id' | 'email' | 'username'>;
}
