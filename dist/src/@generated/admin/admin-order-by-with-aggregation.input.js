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
exports.AdminOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const admin_count_order_by_aggregate_input_1 = require("./admin-count-order-by-aggregate.input");
const admin_max_order_by_aggregate_input_1 = require("./admin-max-order-by-aggregate.input");
const admin_min_order_by_aggregate_input_1 = require("./admin-min-order-by-aggregate.input");
let AdminOrderByWithAggregationInput = class AdminOrderByWithAggregationInput {
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
    _max;
    _min;
};
exports.AdminOrderByWithAggregationInput = AdminOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "hashedPassword", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], AdminOrderByWithAggregationInput.prototype, "hashedRefreshToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], AdminOrderByWithAggregationInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], AdminOrderByWithAggregationInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_count_order_by_aggregate_input_1.AdminCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", admin_count_order_by_aggregate_input_1.AdminCountOrderByAggregateInput)
], AdminOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_max_order_by_aggregate_input_1.AdminMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", admin_max_order_by_aggregate_input_1.AdminMaxOrderByAggregateInput)
], AdminOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_min_order_by_aggregate_input_1.AdminMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", admin_min_order_by_aggregate_input_1.AdminMinOrderByAggregateInput)
], AdminOrderByWithAggregationInput.prototype, "_min", void 0);
exports.AdminOrderByWithAggregationInput = AdminOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], AdminOrderByWithAggregationInput);
//# sourceMappingURL=admin-order-by-with-aggregation.input.js.map