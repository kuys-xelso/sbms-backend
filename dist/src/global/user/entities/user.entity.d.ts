import { UserRole } from '@prisma/client';
export declare class UserEntity {
    id: string;
    email: string;
    firstName: string;
    lastName?: string | null;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}
