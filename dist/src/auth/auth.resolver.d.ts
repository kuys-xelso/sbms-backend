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
    refreshAccessToken(refreshToken: string): Promise<string>;
}
