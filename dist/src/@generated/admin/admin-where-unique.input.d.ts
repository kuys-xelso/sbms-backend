import { AdminWhereInput } from './admin-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class AdminWhereUniqueInput {
    id?: string;
    email?: string;
    username?: string;
    AND?: Array<AdminWhereInput>;
    OR?: Array<AdminWhereInput>;
    NOT?: Array<AdminWhereInput>;
    hashedPassword?: StringFilter;
    hashedRefreshToken?: StringNullableFilter;
    firstName?: StringNullableFilter;
    lastName?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
