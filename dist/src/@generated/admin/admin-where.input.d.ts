import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class AdminWhereInput {
    AND?: Array<AdminWhereInput>;
    OR?: Array<AdminWhereInput>;
    NOT?: Array<AdminWhereInput>;
    id?: StringFilter;
    email?: StringFilter;
    username?: StringFilter;
    hashedPassword?: StringFilter;
    hashedRefreshToken?: StringNullableFilter;
    firstName?: StringNullableFilter;
    lastName?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
