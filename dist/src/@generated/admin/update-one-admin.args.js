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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAdminArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const admin_update_input_1 = require("./admin-update.input");
const class_transformer_1 = require("class-transformer");
const client_1 = require("@prisma/client");
const admin_where_unique_input_1 = require("./admin-where-unique.input");
let UpdateOneAdminArgs = class UpdateOneAdminArgs {
    data;
    where;
};
exports.UpdateOneAdminArgs = UpdateOneAdminArgs;
__decorate([
    (0, graphql_1.Field)(() => admin_update_input_1.AdminUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => admin_update_input_1.AdminUpdateInput),
    __metadata("design:type", admin_update_input_1.AdminUpdateInput)
], UpdateOneAdminArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_where_unique_input_1.AdminWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => admin_where_unique_input_1.AdminWhereUniqueInput),
    __metadata("design:type", Object)
], UpdateOneAdminArgs.prototype, "where", void 0);
exports.UpdateOneAdminArgs = UpdateOneAdminArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneAdminArgs);
//# sourceMappingURL=update-one-admin.args.js.map