import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
export declare class AdminOrderByWithRelationInput {
    id?: `${SortOrder}`;
    email?: `${SortOrder}`;
    username?: `${SortOrder}`;
    hashedPassword?: `${SortOrder}`;
    hashedRefreshToken?: SortOrderInput;
    firstName?: SortOrderInput;
    lastName?: SortOrderInput;
    createdAt?: `${SortOrder}`;
    updatedAt?: `${SortOrder}`;
}
