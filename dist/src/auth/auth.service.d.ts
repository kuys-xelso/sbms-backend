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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            firstName: string;
            lastName: string | null;
            hashedPassword: string;
            hashedRefreshToken: string | null;
            role: import(".prisma/client").$Enums.UserRole;
        };
    }>;
    signin(input: SignInInput): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            firstName: string;
            lastName: string | null;
            hashedPassword: string;
            hashedRefreshToken: string | null;
            role: import(".prisma/client").$Enums.UserRole;
        };
    }>;
    verifyAccessToken(token: string): any;
    refreshAccessToken(refreshToken: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            firstName: string;
            lastName: string | null;
            hashedPassword: string;
            hashedRefreshToken: string | null;
            role: import(".prisma/client").$Enums.UserRole;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<boolean>;
    private generateTokens;
    private storeRefreshToken;
    private getRefreshSecret;
}
