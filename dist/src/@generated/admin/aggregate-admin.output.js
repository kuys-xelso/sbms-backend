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
exports.AggregateAdmin = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const admin_count_aggregate_output_1 = require("./admin-count-aggregate.output");
const admin_min_aggregate_output_1 = require("./admin-min-aggregate.output");
const admin_max_aggregate_output_1 = require("./admin-max-aggregate.output");
let AggregateAdmin = class AggregateAdmin {
    _count;
    _min;
    _max;
};
exports.AggregateAdmin = AggregateAdmin;
__decorate([
    (0, graphql_1.Field)(() => admin_count_aggregate_output_1.AdminCountAggregate, { nullable: true }),
    __metadata("design:type", admin_count_aggregate_output_1.AdminCountAggregate)
], AggregateAdmin.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_min_aggregate_output_1.AdminMinAggregate, { nullable: true }),
    __metadata("design:type", admin_min_aggregate_output_1.AdminMinAggregate)
], AggregateAdmin.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => admin_max_aggregate_output_1.AdminMaxAggregate, { nullable: true }),
    __metadata("design:type", admin_max_aggregate_output_1.AdminMaxAggregate)
], AggregateAdmin.prototype, "_max", void 0);
exports.AggregateAdmin = AggregateAdmin = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateAdmin);
//# sourceMappingURL=aggregate-admin.output.js.map