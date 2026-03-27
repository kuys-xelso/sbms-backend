import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AdminCountOrderByAggregateInput } from './admin-count-order-by-aggregate.input';
import { AdminMaxOrderByAggregateInput } from './admin-max-order-by-aggregate.input';
import { AdminMinOrderByAggregateInput } from './admin-min-order-by-aggregate.input';
export declare class AdminOrderByWithAggregationInput {
    id?: `${SortOrder}`;
    email?: `${SortOrder}`;
    username?: `${SortOrder}`;
    hashedPassword?: `${SortOrder}`;
    hashedRefreshToken?: SortOrderInput;
    firstName?: SortOrderInput;
    lastName?: SortOrderInput;
    createdAt?: `${SortOrder}`;
    updatedAt?: `${SortOrder}`;
    _count?: AdminCountOrderByAggregateInput;
    _max?: AdminMaxOrderByAggregateInput;
    _min?: AdminMinOrderByAggregateInput;
}
