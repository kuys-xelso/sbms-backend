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
exports.AdminGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const admin_count_aggregate_output_1 = require("./admin-count-aggregate.output");
const admin_min_aggregate_output_1 = require("./admin-min-aggregate.output");
const admin_max_aggregate_output_1 = require("./admin-max-aggregate.output");
let AdminGroupBy = class AdminGroupBy {
    id;
    email;
    username;
    hashedPassword;
    hashedRefreshToken;
    firstName;
    lastName;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.AdminGroupBy = AdminGroupBy;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AdminGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AdminGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AdminGroupBy.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AdminGroupBy.prototype, "hashedPassword", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AdminGroupBy.prototype, "hashedRefreshToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AdminGroupBy.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AdminGroupBy.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], AdminGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], AdminGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_count_aggregate_output_1.AdminCountAggregate, { nullable: true }),
    __metadata("design:type", admin_count_aggregate_output_1.AdminCountAggregate)
], AdminGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_min_aggregate_output_1.AdminMinAggregate, { nullable: true }),
    __metadata("design:type", admin_min_aggregate_output_1.AdminMinAggregate)
], AdminGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_max_aggregate_output_1.AdminMaxAggregate, { nullable: true }),
    __metadata("design:type", admin_max_aggregate_output_1.AdminMaxAggregate)
], AdminGroupBy.prototype, "_max", void 0);
exports.AdminGroupBy = AdminGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], AdminGroupBy);
//# sourceMappingURL=admin-group-by.output.js.map