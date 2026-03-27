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
exports.CreateManyAdminArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const admin_create_many_input_1 = require("./admin-create-many.input");
const class_transformer_1 = require("class-transformer");
let CreateManyAdminArgs = class CreateManyAdminArgs {
    data;
    skipDuplicates;
};
exports.CreateManyAdminArgs = CreateManyAdminArgs;
__decorate([
    (0, graphql_1.Field)(() => [admin_create_many_input_1.AdminCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => admin_create_many_input_1.AdminCreateManyInput),
    __metadata("design:type", Array)
], CreateManyAdminArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CreateManyAdminArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAdminArgs = CreateManyAdminArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyAdminArgs);
//# sourceMappingURL=create-many-admin.args.js.map