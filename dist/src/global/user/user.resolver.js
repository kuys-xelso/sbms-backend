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
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const graphql_1 = require("@nestjs/graphql");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const access_token_guard_1 = require("../../auth/guards/access-token.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const user_entity_1 = require("./entities/user.entity");
const user_service_1 = require("./user.service");
let UserResolver = class UserResolver {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async me(user) {
        return this.userService.getUserById(user.id);
    }
    async user(id) {
        return this.userService.getUserById(id);
    }
    async users(skip = 0, take = 10) {
        return this.userService.listUsers({ skip, take });
    }
    async updateProfile(user, firstName, lastName) {
        return this.userService.updateUser(user.id, {
            firstName,
            lastName,
        });
    }
    async updateUser(id, role, firstName, lastName) {
        return this.userService.updateUser(id, {
            firstName,
            lastName,
            role,
        });
    }
    async deleteUser(id) {
        return this.userService.deleteUser(id);
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.UserEntity, {
        description: 'Get current logged-in user',
    }),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.UserEntity, {
        description: 'Get user by ID',
        nullable: true,
    }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.UserEntity], {
        description: 'List all users (admin only)',
    }),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, graphql_1.Args)('skip', { type: () => graphql_1.Int, nullable: true })),
    __param(1, (0, graphql_1.Args)('take', { type: () => graphql_1.Int, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.UserEntity, {
        description: 'Update current user profile',
    }),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('firstName', { nullable: true })),
    __param(2, (0, graphql_1.Args)('lastName', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.UserEntity, {
        description: 'Update user (admin only)',
    }),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('role', { type: () => client_1.UserRole, nullable: true })),
    __param(2, (0, graphql_1.Args)('firstName', { nullable: true })),
    __param(3, (0, graphql_1.Args)('lastName', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Delete user (admin only)',
    }),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.UserEntity),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map