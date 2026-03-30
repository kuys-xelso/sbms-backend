import { PrismaService } from '../../prisma/prisma.service';
export declare class DepartmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDepartment(name: string, description?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
    }>;
    listDepartments(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
    }[]>;
    getDepartmentById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
    }>;
}
