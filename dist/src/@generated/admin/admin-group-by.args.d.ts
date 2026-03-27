import { AdminWhereInput } from './admin-where.input';
import { AdminOrderByWithAggregationInput } from './admin-order-by-with-aggregation.input';
import { AdminScalarFieldEnum } from './admin-scalar-field.enum';
import { AdminScalarWhereWithAggregatesInput } from './admin-scalar-where-with-aggregates.input';
import { AdminCountAggregateInput } from './admin-count-aggregate.input';
import { AdminMinAggregateInput } from './admin-min-aggregate.input';
import { AdminMaxAggregateInput } from './admin-max-aggregate.input';
export declare class AdminGroupByArgs {
    where?: AdminWhereInput;
    orderBy?: Array<AdminOrderByWithAggregationInput>;
    by: Array<`${AdminScalarFieldEnum}`>;
    having?: AdminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminCountAggregateInput;
    _min?: AdminMinAggregateInput;
    _max?: AdminMaxAggregateInput;
}
