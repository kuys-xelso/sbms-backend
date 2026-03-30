import { UserRole } from '@prisma/client';
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
    user(id: string): Promise<{
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
    updateProfile(user: {
        id: string;
    }, firstName?: string, lastName?: string): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        id: string;
        hashedPassword: string;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: string, role?: UserRole, firstName?: string, lastName?: string): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        id: string;
        hashedPassword: string;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<boolean>;
}
