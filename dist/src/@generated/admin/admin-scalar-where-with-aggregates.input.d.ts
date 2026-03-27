import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class AdminScalarWhereWithAggregatesInput {
    AND?: Array<AdminScalarWhereWithAggregatesInput>;
    OR?: Array<AdminScalarWhereWithAggregatesInput>;
    NOT?: Array<AdminScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    email?: StringWithAggregatesFilter;
    username?: StringWithAggregatesFilter;
    hashedPassword?: StringWithAggregatesFilter;
    hashedRefreshToken?: StringNullableWithAggregatesFilter;
    firstName?: StringNullableWithAggregatesFilter;
    lastName?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
