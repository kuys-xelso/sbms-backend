import { UserEntity } from '../../global/user/entities/user.entity';
export declare class AuthEntity {
    accessToken: string;
    refreshToken: string;
    user: UserEntity;
}
