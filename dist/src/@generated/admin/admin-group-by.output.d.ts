import { AdminCountAggregate } from './admin-count-aggregate.output';
import { AdminMinAggregate } from './admin-min-aggregate.output';
import { AdminMaxAggregate } from './admin-max-aggregate.output';
export declare class AdminGroupBy {
    id: string;
    email: string;
    username: string;
    hashedPassword: string;
    hashedRefreshToken?: string;
    firstName?: string;
    lastName?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: AdminCountAggregate;
    _min?: AdminMinAggregate;
    _max?: AdminMaxAggregate;
}
