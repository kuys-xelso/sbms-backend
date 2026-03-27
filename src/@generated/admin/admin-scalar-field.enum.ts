import { registerEnumType } from '@nestjs/graphql';

export enum AdminScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    hashedPassword = "hashedPassword",
    hashedRefreshToken = "hashedRefreshToken",
    firstName = "firstName",
    lastName = "lastName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AdminScalarFieldEnum, { name: 'AdminScalarFieldEnum', description: undefined })
