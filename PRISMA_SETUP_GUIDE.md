# Prisma Setup Guide - HISD3 Web Backend

This guide explains how Prisma ORM is configured and integrated into the HISD3 Web Backend project.

## Table of Contents

1. [Overview](#overview)
2. [Installation & Dependencies](#installation--dependencies)
3. [Architecture](#architecture)
4. [Schema Structure](#schema-structure)
5. [Database Configuration](#database-configuration)
6. [NestJS Integration](#nestjs-integration)
7. [Code Generation](#code-generation)
8. [Seeding](#seeding)
9. [Common Commands](#common-commands)

---

## Overview

Prisma is used as the primary ORM for this NestJS application. It provides:

- Type-safe database client
- Data modeling with `.prisma` schema files
- Automatic migrations
- GraphQL schema generation (via `prisma-nestjs-graphql`)
- Multi-schema support for PostgreSQL

**Key Facts:**

- **Database:** PostgreSQL
- **Prisma Version:** ^6.9.0
- **Parser Feature:** Multi-schema support enabled
- **Additional Generator:** `prisma-nestjs-graphql` for automatic GraphQL types

---

## Installation & Dependencies

### Dependencies in `package.json`

```json
{
  "dependencies": {
    "@prisma/client": "^6.9.0",
    "prisma-graphql-type-decimal": "^3.0.0"
  },
  "devDependencies": {
    "prisma": "^5.0.0" // Typically in devDependencies
  }
}
```

### Prisma Configuration

The `package.json` includes custom Prisma configuration:

```json
"prisma": {
  "schema": "./prisma/schema"
}
```

This points to the schema directory (not a single file), enabling modular schema management.

---

## Architecture

### File Structure

```
prisma/
├── schema/
│   ├── schema.prisma      # Main configuration (generators & datasource)
│   └── user.prisma        # User-related models (User, Profile, Department, Role)
├── schema.prisma          # Root schema file (redirects to schema/ folder)
└── seed.ts                # Database seeding script
```

### Why This Structure?

The modular schema approach allows:

- **Better organization** - Models grouped by domain (e.g., `user.prisma`)
- **Easier maintenance** - Separate files for different features
- **Scalability** - Easy to add new schema files as the project grows

---

## Schema Structure

### Main Schema Configuration (`prisma/schema/schema.prisma`)

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  schemas  = ["public", "global"]
}

generator nestgraphql {
  provider = "node node_modules/prisma-nestjs-graphql"
  output   = "../../src/@generated"
  fields_Validator_from  = "class-validator"
  fields_Validator_input = true
}
```

**Key Configuration:**

| Setting                  | Purpose                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `provider`               | Prisma Client JavaScript generator                           |
| `previewFeatures`        | Enables multi-schema support in PostgreSQL                   |
| `datasource db`          | PostgreSQL connection configuration                          |
| `schemas`                | Two schemas: `public` (main data) and `global` (shared data) |
| `nestgraphql`            | Generates GraphQL types and NestJS DTOs automatically        |
| `fields_Validator_input` | Adds validation rules to input types using `class-validator` |

### Data Models (`prisma/schema/user.prisma`)

#### User Model

```prisma
model User {
    id                 String   @id @default(uuid())
    email              String   @unique
    username           String   @unique
    hashedPassword     String   @map("hashed_password")
    hashedRefreshToken String?  @map("hashed_refresh_token")
    role               Role[]   @default([USER])
    isActive           Boolean  @default(true) @map("is_active")
    isApprove          Boolean  @default(false) @map("is_approve")
    // Relation
    profile            Profile?
    // Timestamps
    createdAt          DateTime @default(now()) @map("created_at") @db.Date
    createdBy          String?  @map("created_by")
    updatedAt          DateTime @default(now()) @updatedAt @map("updated_at") @db.Date
    updatedBy          String?  @map("updated_by")

    @@map("user")
    @@schema("public")
}
```

**Special Annotations:**

- `@HideField()` - Hides fields from GraphQL schema
- `@Validator.@IsEmail()` - Adds email validation
- `@map()` - Maps TypeScript field names to database columns (snake_case convention)
- `@@map()` - Maps model name to table name
- `@@schema()` - Specifies which PostgreSQL schema the table belongs to

#### Profile Model

```prisma
model Profile {
    id               String              @id @default(uuid())
    firstName        String?             @map("first_name")
    middleName       String?             @map("middle_name")
    lastName         String?             @map("last_name")
    designation      String?
    employeeID       Int?                @default(autoincrement()) @map("employee_id")
    dateHired        DateTime?           @map("date_hired")
    birthDate        DateTime?           @map("birth_date")
    address          Json?
    contact          Json?
    // Relations
    department       Department?         @relation(fields: [departmentId], references: [id])
    departmentId     String?             @map("department_id")
    user             User?               @relation(fields: [userId], references: [id])
    userId           String?             @unique @map("user_id")
    // Timestamps
    createdAt        DateTime            @default(now()) @map("created_at") @db.Timestamptz()
    createdBy        String?             @map("created_by")
    updatedAt        DateTime            @default(now()) @updatedAt @map("updated_at") @db.Timestamptz()
    updatedBy        String?             @map("updated_by")

    @@map("profile")
    @@schema("public")
}
```

#### Department Model

```prisma
model Department {
    id          String      @id @default(uuid())
    name        String
    description String?
    // Relations
    profile     Profile[]

    @@map("department")
    @@schema("public")
}
```

#### Role Enum

```prisma
enum Role {
    USER
    ADMIN
    @@schema("public")
}
```

**Relationships:**

- `User` → `Profile` (One-to-One)
- `Department` → `Profile` (One-to-Many)

---

## Database Configuration

### Environment Variables (`env.sample`)

Create a `.env` file based on `env.sample`:

```env
DATABASE_URL="postgresql://postgres:secret@localhost:5432/hisd3-web"
JWT_SECRET="d03852599605c"
JWT_REFRESH_TOKEN="9f8b7a6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8"
TOKEN_NAME="access_token"
NODE_ENV="development"
```

**DATABASE_URL Format:** `postgresql://user:password@host:port/database`

### Multi-Schema Setup

The project uses two PostgreSQL schemas:

- **`public`** - Main application data (User, Profile, Department)
- **`global`** - Shared/global data (defined in `@@schema("global")`)

This allows logical separation of concerns and better data organization.

---

## NestJS Integration

### PrismaModule (`src/prisma/prisma.module.ts`)

```typescript
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

**Key Points:**

- `@Global()` - Makes PrismaService available throughout the app without importing in every module
- `exports` - Explicitly exports PrismaService for other modules

### PrismaService (`src/prisma/prisma.service.ts`)

```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

**Why This Approach:**

- `PrismaService extends PrismaClient` - Inherits all Prisma methods
- `OnModuleInit` - Connects to database when NestJS module initializes
- Automatically injected into any service that needs database access

### Integration in AppModule

```typescript
// In src/app.module.ts
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({...}),
    AuthModule,
    PrismaModule,          // ← Prisma is registered here
    SequentialIdModule,
    GlobalModule,
  ],
})
export class AppModule {}
```

### Usage Example

```typescript
// In any service
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUser(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });
  }

  async createUser(data) {
    return this.prisma.user.create({
      data,
      include: { profile: true },
    });
  }
}
```

---

## Code Generation

### Automatic GraphQL Type Generation

The `prisma-nestjs-graphql` generator automatically creates:

**Generated Files Location:** `src/@generated/`

```
src/@generated/
├── department/
│   ├── create-one-department.args.ts
│   ├── department.model.ts
│   ├── delete-one-department.args.ts
│   └── ...
├── profile/
├── user/
└── prisma/
```

**Generated Files Include:**

- Input types for CRUD operations
- Output/Model types
- Filter, sort, and aggregation types
- GraphQL resolvers for common operations
- NestJS DTOs with validation decorators

**Why Auto-Generation?**

- Type safety between database models and GraphQL
- Consistency across API
- Reduced boilerplate code
- Automatic validation based on schema

### Field Validation

The generator uses `class-validator` decorators:

```typescript
// Example generated input
export class CreateOneUserArgs {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  // ... more fields
}
```

---

## Seeding

### Seed Script (`prisma/seed.ts`)

```typescript
import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('password');

  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      username: 'admin',
      hashedPassword: password,
      role: ['ADMIN'],
      isActive: true,
      isApprove: true,
      profile: {
        create: {
          firstName: 'Admin',
          lastName: 'User',
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

**Key Points:**

- Uses `upsert()` - Creates if doesn't exist, skips if already present
- Password is hashed using `argon2` before storing
- Creates user with admin role and profile data
- Proper error handling and connection cleanup

### Adding Seed Script to package.json

Typically configured as:

```json
{
  "scripts": {
    "db:seed": "ts-node prisma/seed.ts"
  }
}
```

---

## Common Commands

### Database Operations

```bash
# Push schema changes to database (development)
npm run start:prod  # Runs: npx prisma db push && node dist/main

# Generate Prisma Client and GraphQL types
npx prisma generate

# Format schema files
npx prisma format

# Seed database
npm run db:seed
# or if configured: npx prisma db seed
```

### Development

```bash
# Start development server with auto-reload
npm run start:dev

# Build project
npm build

# Start production server
npm start

# Production startup (includes db push and migration)
npm run start:prod
```

### Troubleshooting

```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# View database in Prisma Studio (visual editor)
npx prisma studio

# See current Prisma configuration
npx prisma info
```

---

## Best Practices Implemented

1. **Field Naming Convention** - Snake_case in database, camelCase in TypeScript
2. **Timestamps** - `createdAt`, `updatedAt` on all models
3. **Audit Trail** - `createdBy`, `updatedBy` fields for tracking changes
4. **Validation** - Decorators applied at schema level
5. **Type Safety** - Generated types for GraphQL and DTOs
6. **Global Module** - PrismaService available app-wide
7. **Password Security** - Using `argon2` for hashing
8. **Modular Schema** - Domain-based schema organization
9. **Multi-Schema Support** - Separate schemas for organization

---

## Useful Resources

- **Prisma Documentation:** https://www.prisma.io/docs/
- **Prisma to GraphQL:** https://github.com/AhmedAbouelkher/prisma-nestjs-graphql
- **NestJS & Prisma:** https://docs.nestjs.com/recipes/prisma
- **PostgreSQL Multi-Schema:** https://www.postgresql.org/docs/current/ddl-schemas.html

---

## Summary

This project uses Prisma as a centralized ORM that:

- Manages database schema and migrations
- Provides type-safe database access via PrismaClient
- Auto-generates GraphQL types and NestJS DTOs
- Supports multi-schema PostgreSQL architecture
- Integrates seamlessly with NestJS via a global PrismaModule
- Includes seeding for initialization with admin user

The setup emphasizes **type safety**, **developer experience**, and **scalability**.
