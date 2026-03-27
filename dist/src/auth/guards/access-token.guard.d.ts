import { ExecutionContext } from '@nestjs/common';
declare const AccessTokenGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AccessTokenGuard extends AccessTokenGuard_base {
    getRequest(context: ExecutionContext): any;
    handleRequest<TUser = any>(err: unknown, user: TUser): NonNullable<TUser>;
}
export {};
