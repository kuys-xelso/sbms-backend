"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
const signin_input_1 = require("./dto/signin.input");
const signup_input_1 = require("./dto/signup.input");
const auth_entity_1 = require("./entities/auth.entity");
const common_1 = require("@nestjs/common");
const access_token_guard_1 = require("./guards/access-token.guard");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
let AuthResolver = class AuthResolver {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async signup(input) {
        return this.authService.signup(input);
    }
    async signin(input) {
        return this.authService.signin(input);
    }
    async refreshAccessToken(refreshToken) {
        return this.authService.refreshAccessToken(refreshToken);
    }
    async logout(user) {
        return this.authService.logout(user.id);
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Mutation)(() => auth_entity_1.AuthEntity, {
        description: 'Register new user account',
    }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_input_1.SignUpInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_entity_1.AuthEntity, {
        description: 'Login with email and password',
    }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_input_1.SignInInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signin", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_entity_1.AuthEntity, {
        description: 'Rotate tokens using refresh token',
    }),
    __param(0, (0, graphql_1.Args)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "refreshAccessToken", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Logout current user and invalidate refresh token',
    }),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "logout", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map