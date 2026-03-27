"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const argon2 = __importStar(require("argon2"));
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async signup(input) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: input.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email already registered');
        }
        const hashedPassword = await argon2.hash(input.password);
        const user = await this.prisma.user.create({
            data: {
                email: input.email,
                firstName: input.firstName,
                lastName: input.lastName,
                hashedPassword,
                role: client_1.UserRole.USER,
            },
        });
        const { accessToken, refreshToken } = await this.generateTokens(user.id);
        return {
            accessToken,
            refreshToken,
            user,
        };
    }
    async signin(input) {
        const user = await this.prisma.user.findUnique({
            where: { email: input.email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const isPasswordValid = await argon2.verify(user.hashedPassword, input.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const { accessToken, refreshToken } = await this.generateTokens(user.id);
        return {
            accessToken,
            refreshToken,
            user,
        };
    }
    verifyAccessToken(token) {
        try {
            return this.jwt.verify(token, {
                secret: process.env.JWT_SECRET,
            });
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
    async refreshAccessToken(refreshToken) {
        try {
            const decoded = this.jwt.verify(refreshToken, {
                secret: this.getRefreshSecret(),
            });
            const user = await this.prisma.user.findUnique({
                where: { id: decoded.sub },
            });
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            return this.jwt.sign({
                sub: user.id,
                email: user.email,
                role: user.role,
            }, {
                secret: process.env.JWT_SECRET,
                expiresIn: process.env.JWT_EXPIRATION || '1h',
            });
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
    async generateTokens(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const accessToken = this.jwt.sign({
            sub: user.id,
            email: user.email,
            role: user.role,
        }, {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRATION || '1h',
        });
        const refreshToken = this.jwt.sign({
            sub: user.id,
            type: 'refresh',
        }, {
            secret: this.getRefreshSecret(),
            expiresIn: process.env.JWT_REFRESH_EXPIRATION || '24h',
        });
        return { accessToken, refreshToken };
    }
    getRefreshSecret() {
        return process.env.JWT_REFRESH_SECRET || process.env.JWT_REFRESH_TOKEN;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map