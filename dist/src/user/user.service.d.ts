import { UserRole } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserById(id: string): Promise<{
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
    listUsers(options: {
        skip: number;
        take: number;
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
    }[]>;
    updateUser(id: string, data: {
        firstName?: string;
        lastName?: string;
        role?: UserRole;
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
    deleteUser(id: string): Promise<boolean>;
}
