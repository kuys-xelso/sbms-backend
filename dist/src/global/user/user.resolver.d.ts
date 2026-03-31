import { UserRole } from '@prisma/client';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    me(user: {
        id: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string | null;
        hashedPassword: string;
        hashedRefreshToken: string | null;
        role: import(".prisma/client").$Enums.UserRole;
    }>;
    user(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string | null;
        hashedPassword: string;
        hashedRefreshToken: string | null;
        role: import(".prisma/client").$Enums.UserRole;
    }>;
    users(skip?: number, take?: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string | null;
        hashedPassword: string;
        hashedRefreshToken: string | null;
        role: import(".prisma/client").$Enums.UserRole;
    }[]>;
    updateProfile(user: {
        id: string;
    }, firstName?: string, lastName?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string | null;
        hashedPassword: string;
        hashedRefreshToken: string | null;
        role: import(".prisma/client").$Enums.UserRole;
    }>;
    updateUser(id: string, role?: UserRole, firstName?: string, lastName?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string | null;
        hashedPassword: string;
        hashedRefreshToken: string | null;
        role: import(".prisma/client").$Enums.UserRole;
    }>;
    deleteUser(id: string): Promise<boolean>;
}
