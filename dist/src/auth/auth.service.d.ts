import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { SignInInput } from './dto/signin.input';
import { SignUpInput } from './dto/signup.input';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signup(input: SignUpInput): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            email: string;
            firstName: string;
            lastName: string | null;
            id: string;
            hashedPassword: string;
            role: import(".prisma/client").$Enums.UserRole;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    signin(input: SignInInput): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            email: string;
            firstName: string;
            lastName: string | null;
            id: string;
            hashedPassword: string;
            role: import(".prisma/client").$Enums.UserRole;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    verifyAccessToken(token: string): any;
    refreshAccessToken(refreshToken: string): Promise<string>;
    private generateTokens;
    private getRefreshSecret;
}
