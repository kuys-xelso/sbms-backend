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
exports.AdminGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const admin_where_input_1 = require("./admin-where.input");
const class_transformer_1 = require("class-transformer");
const admin_order_by_with_aggregation_input_1 = require("./admin-order-by-with-aggregation.input");
const admin_scalar_field_enum_1 = require("./admin-scalar-field.enum");
const admin_scalar_where_with_aggregates_input_1 = require("./admin-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const admin_count_aggregate_input_1 = require("./admin-count-aggregate.input");
const admin_min_aggregate_input_1 = require("./admin-min-aggregate.input");
const admin_max_aggregate_input_1 = require("./admin-max-aggregate.input");
let AdminGroupByArgs = class AdminGroupByArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
    _count;
    _min;
    _max;
};
exports.AdminGroupByArgs = AdminGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => admin_where_input_1.AdminWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => admin_where_input_1.AdminWhereInput),
    __metadata("design:type", admin_where_input_1.AdminWhereInput)
], AdminGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [admin_order_by_with_aggregation_input_1.AdminOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], AdminGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [admin_scalar_field_enum_1.AdminScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], AdminGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_scalar_where_with_aggregates_input_1.AdminScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", admin_scalar_where_with_aggregates_input_1.AdminScalarWhereWithAggregatesInput)
], AdminGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AdminGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AdminGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_count_aggregate_input_1.AdminCountAggregateInput, { nullable: true }),
    __metadata("design:type", admin_count_aggregate_input_1.AdminCountAggregateInput)
], AdminGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_min_aggregate_input_1.AdminMinAggregateInput, { nullable: true }),
    __metadata("design:type", admin_min_aggregate_input_1.AdminMinAggregateInput)
], AdminGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_max_aggregate_input_1.AdminMaxAggregateInput, { nullable: true }),
    __metadata("design:type", admin_max_aggregate_input_1.AdminMaxAggregateInput)
], AdminGroupByArgs.prototype, "_max", void 0);
exports.AdminGroupByArgs = AdminGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], AdminGroupByArgs);
//# sourceMappingURL=admin-group-by.args.js.map