import { UserRole } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserById(id: string): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        id: string;
        hashedPassword: string;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listUsers(options: {
        skip: number;
        take: number;
    }): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        id: string;
        hashedPassword: string;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateUser(id: string, data: {
        firstName?: string;
        lastName?: string;
        role?: UserRole;
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
    deleteUser(id: string): Promise<boolean>;
}
