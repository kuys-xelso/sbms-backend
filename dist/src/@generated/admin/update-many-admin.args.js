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
exports.UpdateManyAdminArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const admin_update_many_mutation_input_1 = require("./admin-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const admin_where_input_1 = require("./admin-where.input");
const graphql_3 = require("@nestjs/graphql");
let UpdateManyAdminArgs = class UpdateManyAdminArgs {
    data;
    where;
    limit;
};
exports.UpdateManyAdminArgs = UpdateManyAdminArgs;
__decorate([
    (0, graphql_1.Field)(() => admin_update_many_mutation_input_1.AdminUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => admin_update_many_mutation_input_1.AdminUpdateManyMutationInput),
    __metadata("design:type", admin_update_many_mutation_input_1.AdminUpdateManyMutationInput)
], UpdateManyAdminArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_where_input_1.AdminWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => admin_where_input_1.AdminWhereInput),
    __metadata("design:type", admin_where_input_1.AdminWhereInput)
], UpdateManyAdminArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateManyAdminArgs.prototype, "limit", void 0);
exports.UpdateManyAdminArgs = UpdateManyAdminArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyAdminArgs);
//# sourceMappingURL=update-many-admin.args.js.map