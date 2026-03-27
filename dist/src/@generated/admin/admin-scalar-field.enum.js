"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var AdminScalarFieldEnum;
(function (AdminScalarFieldEnum) {
    AdminScalarFieldEnum["id"] = "id";
    AdminScalarFieldEnum["email"] = "email";
    AdminScalarFieldEnum["username"] = "username";
    AdminScalarFieldEnum["hashedPassword"] = "hashedPassword";
    AdminScalarFieldEnum["hashedRefreshToken"] = "hashedRefreshToken";
    AdminScalarFieldEnum["firstName"] = "firstName";
    AdminScalarFieldEnum["lastName"] = "lastName";
    AdminScalarFieldEnum["createdAt"] = "createdAt";
    AdminScalarFieldEnum["updatedAt"] = "updatedAt";
})(AdminScalarFieldEnum || (exports.AdminScalarFieldEnum = AdminScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(AdminScalarFieldEnum, { name: 'AdminScalarFieldEnum', description: undefined });
//# sourceMappingURL=admin-scalar-field.enum.js.map