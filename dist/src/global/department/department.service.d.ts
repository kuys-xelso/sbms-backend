import { PrismaService } from '../../prisma/prisma.service';
export declare class DepartmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDepartment(name: string, description?: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listDepartments(): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDepartmentById(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
