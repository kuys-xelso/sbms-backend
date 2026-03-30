import { DepartmentService } from './department.service';
export declare class DepartmentResolver {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    departments(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
    }[]>;
    createDepartment(name: string, description?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
    }>;
}
