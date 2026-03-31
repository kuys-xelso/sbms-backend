import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';
import { SignUpInput } from './dto/signup.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
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
    logout(user: {
        id: string;
    }): Promise<boolean>;
}
