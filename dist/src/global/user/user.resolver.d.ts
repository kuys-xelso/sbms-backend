import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    me(user: {
        id: string;
    }): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        id: string;
        hashedPassword: string;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    users(skip?: number, take?: number): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        id: string;
        hashedPassword: string;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
