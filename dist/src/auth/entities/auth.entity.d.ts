import { User } from '../../user/entities/user.entity';
export declare class AuthEntity {
    accessToken: string;
    refreshToken: string;
    user: User;
}
