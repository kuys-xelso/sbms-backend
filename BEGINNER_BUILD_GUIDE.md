# 🚀 Complete Beginner's Guide: Building a Secure GraphQL Backend

**Project**: Ticketing System Backend  
**Duration**: 5-8 weeks  
**Target Audience**: Beginners with basic JavaScript/TypeScript knowledge

---

## 📋 Table of Contents

1. [What You're Building](#what-youre-building)
2. [Tech Stack Overview](#tech-stack-overview)
3. [Phase 0: Prerequisites & Setup](#phase-0-prerequisites--setup)
4. [Phase 1: Project Foundation (Week 1)](#phase-1-project-foundation-week-1)
5. [Phase 2: Database & Data Modeling (Weeks 2-3)](#phase-2-database--data-modeling-weeks-2-3)
6. [Phase 3: Authentication (Weeks 4-5)](#phase-3-authentication-weeks-4-5)
7. [Phase 4: Authorization & Security (Week 6)](#phase-4-authorization--security-week-6)
8. [Phase 5: API Resolvers & Business Logic (Weeks 7-8)](#phase-5-api-resolvers--business-logic-weeks-7-8)
9. [Testing & Deployment](#testing--deployment)
10. [Common Issues & Solutions](#common-issues--solutions)

---

## What You're Building

### The Final Product

A **secure RESTful GraphQL API** for a ticketing system with:

```
Features:
✅ User Management (Signup, Login, Logout)
✅ Role-Based Access Control (USER, ADMIN)
✅ JWT Authentication with Refresh Tokens
✅ Department Management
✅ User Profiles
✅ Secure Password Hashing (Argon2)
✅ GraphQL API Endpoints
✅ PostgreSQL Database
✅ Error Handling & Validation
```

### Example Use Case

```graphql
# A user can authenticate
mutation {
  signup(input: {
    email: "john@example.com"
    password: "SecurePass123!@"
    firstName: "John"
  }) {
    accessToken
    refreshToken
    user { id email }
  }
}

# Users can query their profile (protected endpoint)
query {
  me {
    id
    email
    firstName
    role
    department { name }
  }
}

# Admins can manage users
mutation {
  updateUser(id: "123", input: {
    role: ADMIN
  }) {
    id email role
  }
}
```

---

## Tech Stack Overview

### Why These Technologies?

```
NestJS
├─ What: Node.js framework with built-in patterns
├─ Why: Scalable, TypeScript support, dependency injection
├─ Beginner Benefit: Opinionated structure = less decisions
│
GraphQL
├─ What: Query language for APIs (like SQL for APIs)
├─ Why: Better than REST - request only what you need
├─ Beginner Benefit: Apollo Server handles complexity
│
PostgreSQL
├─ What: Relational database
├─ Why: ACID compliance, data integrity, powerful queries
├─ Beginner Benefit: Reliable data storage
│
Prisma
├─ What: ORM (Object-Relational Mapping)
├─ Why: Type-safe database queries, migrations, relationships
├─ Beginner Benefit: No SQL writing needed, auto-generated types
│
TypeScript
├─ What: JavaScript with types
├─ Why: Catch errors early, better code completion
├─ Beginner Benefit: IDE helps you write correct code
│
JWT (JSON Web Tokens)
├─ What: Stateless authentication tokens
├─ Why: Scalable, secure, no server sessions needed
├─ Beginner Benefit: Industry standard, easy to understand
│
Argon2
├─ What: Password hashing algorithm
├─ Why: Resistant to GPU attacks, modern & secure
├─ Beginner Benefit: Just call hash() and verify()
```

---

## Phase 0: Prerequisites & Setup

### Step 1: Install Required Software

#### 1.1 Node.js & npm

```bash
# 1. Download Node.js v18+ from https://nodejs.org/
# 2. Verify installation:
node --version      # v18+
npm --version       # 9+

# 3. Update npm (optional but recommended)
npm install -g npm@latest
```

#### 1.2 PostgreSQL

```bash
# Windows: Download installer from https://www.postgresql.org/download/
# macOS: brew install postgresql
# Linux: sudo apt-get install postgresql

# Verify installation:
psql --version      # PostgreSQL 12+

# Start PostgreSQL service (Windows: already running by default)
# Note the superuser password you set during installation
```

#### 1.3 Git (Optional)

```bash
# Download from https://git-scm.com/
git --version       # Verify installation
```

#### 1.4 VS Code & Extensions

```
Download VS Code: https://code.visualstudio.com/

Extensions to install:
1. "Prettier - Code formatter"
2. "GraphQL: Language Feature Support"
3. "Prisma"
4. "REST Client"
5. "Thunder Client" (optional, for testing APIs)
```

### Step 2: Create Database

```bash
# Open PostgreSQL command line (psql)
# Windows: Use pgAdmin or command line
# macOS/Linux: psql -U postgres

# Create database for development
CREATE DATABASE hisd3_dev;

# Create database for testing
CREATE DATABASE hisd3_test;

# Verify
\l        # List all databases
```

### Step 3: Prepare Project Directory

```bash
# Create project directory
mkdir hisd3-web-backend
cd hisd3-web-backend

# Initialize git (optional)
git init
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
```

---

## Phase 1: Project Foundation (Week 1)

### What You'll Learn

- NestJS project structure
- Module organization
- Dependency injection
- Basic configuration

### Step 1: Initialize NestJS Project

```bash
# Install NestJS CLI globally
npm install -g @nestjs/cli

# Create new NestJS project
nest new . --skip-git --package-manager npm
# When prompted about package manager, select "npm"
```

This generates:

```
hisd3-web-backend/
├── src/
│   ├── app.module.ts         # Root module
│   ├── app.controller.ts     # Controller (REST)
│   ├── app.service.ts        # Service (business logic)
│   └── main.ts              # Entry point
├── test/                     # Test files
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── jest.config.js            # Testing config
└── .gitignore
```

### Step 2: Install Core Dependencies

```bash
npm install \
  @nestjs/common@^10.0.0 \
  @nestjs/core@^10.0.0 \
  @nestjs/platform-express@^10.0.0 \
  @nestjs/graphql@^12.0.0 \
  @nestjs/apollo@^12.0.0 \
  @nestjs/jwt@^11.0.0 \
  @nestjs/passport@^10.0.0 \
  @nestjs/config@^3.0.0 \
  passport@^0.7.0 \
  passport-jwt@^4.0.1 \
  apollo-server-express@^4.0.0 \
  graphql@^16.6.0 \
  @prisma/client@^5.0.0 \
  argon2@^0.31.1 \
  dotenv@^16.0.3 \
  class-validator@^0.14.0 \
  class-transformer@^0.5.1 \
  rxjs@^7.8.0
```

### Step 3: Install DevDependencies

```bash
npm install --save-dev \
  @nestjs/cli@^10.0.0 \
  @nestjs/schematics@^10.0.0 \
  @nestjs/testing@^10.0.0 \
  @types/express@^4.17.17 \
  @types/jest@^29.5.0 \
  @types/node@^20.0.0 \
  @types/passport-jwt@^3.0.8 \
  @typescript-eslint/eslint-plugin@^6.0.0 \
  @typescript-eslint/parser@^6.0.0 \
  eslint@^8.0.0 \
  jest@^29.5.0 \
  prettier@^3.0.0 \
  prisma@^5.0.0 \
  ts-jest@^29.1.0 \
  ts-loader@^9.4.0 \
  ts-node@^10.9.0 \
  typescript@^5.0.0
```

### Step 4: Create Environment File

```bash
# Create .env file
cat > .env << 'EOF'
# Database Configuration
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/hisd3_dev"

# Server Configuration
PORT=3002
NODE_ENV=development

# JWT Configuration
JWT_SECRET="your-secret-key-change-in-production"
JWT_REFRESH_SECRET="your-refresh-secret-key-change-in-production"
JWT_EXPIRATION="3600"
JWT_REFRESH_EXPIRATION="86400"

# CORS Configuration
CORS_ORIGIN="http://localhost:3000"
EOF
```

**⚠️ IMPORTANT**: Update `YOUR_PASSWORD` with your PostgreSQL password

### Step 5: Test the Setup

```bash
# Start development server
npm run start:dev

# Expected output:
# [Nest] ... - 03/27/2026, 10:00:00 AM     LOG [NestFactory] Starting Nest application...
# [Nest] ... - 03/27/2026, 10:00:00 AM     LOG [InstanceLoader] AppModule dependencies initialized
# [Nest] ... - 03/27/2026, 10:00:00 AM     LOG [NestApplication] Nest application successfully started

# Access http://localhost:3002 (should show 404, which is fine)
```

---

## Phase 2: Database & Data Modeling (Weeks 2-3)

### What You'll Learn

- Database schema design
- Prisma ORM basics
- Migrations
- Model relationships

### Step 1: Initialize Prisma

```bash
# Initialize Prisma
npx prisma init

# This creates:
# ├── prisma/
# │   ├── schema.prisma    # Database schema
# │   └── .env            # (linked to root .env)
# └── .env
```

### Step 2: Define Database Schema

Edit `prisma/schema.prisma`:

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ==================
// 1. ENUMS (Types)
// ==================

enum UserRole {
  USER
  ADMIN
}

// ==================
// 2. MODELS (Tables)
// ==================

// User Model - Represents application users
model User {
  // Primary key
  id               String      @id @default(cuid())  // Unique identifier
  
  // Basic info
  email            String      @unique              // Must be unique
  firstName        String
  lastName         String?                         // ? = optional
  
  // Authentication
  hashedPassword   String
  
  // Authorization
  role             UserRole    @default(USER)      // Default role
  
  // Relationships
  profile          Profile?                        // One-to-one
  tickets          Ticket[]                        // One-to-many
  
  // Metadata
  createdAt        DateTime    @default(now())
  updatedAt        DateTime    @updatedAt
  
  @@map("users")              // Database table name
}

// Profile Model - Extended user information
model Profile {
  id               String      @id @default(cuid())
  
  // Basic info
  phone            String?
  bio              String?
  avatar           String?     // URL to avatar image
  
  // Department
  departmentId     String
  department       Department  @relation(fields: [departmentId], references: [id])
  
  // Relationship to User
  userId           String      @unique             // Foreign key
  user             User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Metadata
  createdAt        DateTime    @default(now())
  updatedAt        DateTime    @updatedAt
  
  @@map("profiles")
}

// Department Model - User departments
model Department {
  id               String      @id @default(cuid())
  
  // Basic info
  name             String      @unique
  description      String?
  
  // Relationships
  profiles         Profile[]                       // One-to-many
  
  // Metadata
  createdAt        DateTime    @default(now())
  updatedAt        DateTime    @updatedAt
  
  @@map("departments")
}

// Ticket Model - Support tickets (for business logic)
model Ticket {
  id               String      @id @default(cuid())
  
  // Content
  title            String
  description      String
  priority         String      @default("MEDIUM")
  
  // Relationships
  userId           String                          // Foreign key
  user             User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Metadata
  createdAt        DateTime    @default(now())
  updatedAt        DateTime    @updatedAt
  
  @@map("tickets")
}
```

**Key Concepts Explained:**

```
@id              = Primary key (unique identifier for each row)
@unique          = No duplicates allowed (e.g., no two users with same email)
@default(now())  = Automatically set to current time when created
@updatedAt       = Automatically updated whenever record changes
String?          = Optional field (can be null)
@relation()      = Links two tables together
onDelete: Cascade= Delete child records when parent is deleted
```

### Step 3: Create Initial Migration

```bash
# Create migration file
npx prisma migrate dev --name init

# This:
# 1. Creates migration file in prisma/migrations/
# 2. Runs migration on database
# 3. Generates Prisma Client
# 4. Creates prisma/schema.prisma types

# You'll see:
# ✔ Your database has been created at postgresql://...
# ✔ Prisma schema loaded from prisma/schema.prisma
# ✔ Migration created in prisma/migrations/...
```

### Step 4: Create Prisma Service

Create `src/prisma/prisma.service.ts`:

```typescript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Prisma Service
 * 
 * This service:
 * 1. Manages Prisma Client connection
 * 2. Provides access to database models
 * 3. Handles connection lifecycle
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  
  // Called when module starts
  async onModuleInit() {
    // Connect to database
    await this.$connect();
    console.log('✅ Database connected');
  }

  // Called when module stops
  async onModuleDestroy() {
    // Disconnect from database
    await this.$disconnect();
    console.log('❌ Database disconnected');
  }
}
```

### Step 5: Create Prisma Module

Create `src/prisma/prisma.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * Prisma Module
 * 
 * Makes PrismaService available to other modules
 */
@Module({
  providers: [PrismaService],
  exports: [PrismaService],  // Export so other modules can use it
})
export class PrismaModule {}
```

### Step 6: Update App Module

Edit `src/app.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true,  // Available in all modules
      envFilePath: '.env',
    }),
    
    // Import Prisma
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

### Step 7: Test Database Connection

```bash
# Start the app (should connect to database)
npm run start:dev

# Check logs for: "✅ Database connected"

# If error, check:
# 1. DATABASE_URL in .env is correct
# 2. PostgreSQL is running
# 3. Database exists (psql: \l)
```

---

## Phase 3: Authentication (Weeks 4-5)

### What You'll Learn

- User registration with validation
- Password hashing with Argon2
- JWT token generation
- Login flow
- Token refresh
- Password security best practices

### Step 1: Create Data Transfer Objects (DTOs)

DTOs are classes that define the shape of data coming into the API.

Create `src/auth/dto/signup.input.ts`:

```typescript
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength, Matches } from 'class-validator';

/**
 * SignUp Input DTO
 * 
 * Validates user signup data before creating account
 * Ensures:
 * - Email is valid format
 * - Password meets security requirements
 * - Basic info is provided
 */
@InputType()
export class SignUpInput {
  @Field()
  @IsEmail({}, { message: 'Must be a valid email' })
  email: string;

  @Field()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[a-z])/, {
    message: 'Password must contain lowercase letter'
  })
  @Matches(/^(?=.*[A-Z])/, {
    message: 'Password must contain uppercase letter'
  })
  @Matches(/^(?=.*\d)/, {
    message: 'Password must contain number'
  })
  @Matches(/^(?=.*[!@#$%^&*])/, {
    message: 'Password must contain special character (!@#$%^&*)'
  })
  password: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;
}
```

**Security Note**: Password validation ensures users create strong passwords resistant to brute force attacks.

Create `src/auth/dto/signin.input.ts`:

```typescript
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class SignInInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
```

### Step 2: Create Auth Entities

Create `src/auth/entities/auth.entity.ts`:

```typescript
import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from '../../global/user/entities/user.entity';

/**
 * Auth Entity
 * 
 * Response when user signs up or signs in
 * Contains:
 * - Access token (for API requests)
 * - Refresh token (for getting new access token)
 * - User info
 */
@ObjectType()
export class AuthEntity {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => UserEntity)
  user: UserEntity;
}
```

### Step 3: Create Auth Service

Create `src/auth/auth.service.ts`:

```typescript
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';
import { SignUpInput } from './dto/signup.input';
import { SignInInput } from './dto/signin.input';

/**
 * Authentication Service
 * 
 * Handles:
 * - User registration (signup)
 * - User login (signin)
 * - JWT token generation
 * - Password hashing & verification
 * - Token refresh
 */
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  /**
   * SIGNUP (User Registration)
   * 
   * 1. Validate input (handled by DTO)
   * 2. Check if email already exists
   * 3. Hash password using Argon2
   * 4. Create user in database
   * 5. Generate JWT tokens
   * 6. Return tokens & user info
   */
  async signup(input: SignUpInput) {
    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    // Hash password using Argon2
    // Argon2 is GPU-resistant and modern standard for password hashing
    const hashedPassword = await argon2.hash(input.password);

    // Create user in database
    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName || '',
        hashedPassword,
        role: 'USER', // Default role
      },
    });

    // Generate tokens
    const { accessToken, refreshToken } = await this.generateTokens(user.id);

    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  /**
   * SIGNIN (User Login)
   * 
   * 1. Validate input
   * 2. Find user by email
   * 3. Verify password using Argon2
   * 4. Generate JWT tokens
   * 5. Return tokens & user info
   */
  async signin(input: SignInInput) {
    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    // User doesn't exist
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Verify password
    // Never compare plaintext passwords!
    // Always use argon2.verify()
    const isPasswordValid = await argon2.verify(user.hashedPassword, input.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate tokens
    const { accessToken, refreshToken } = await this.generateTokens(user.id);

    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  /**
   * Generate JWT Tokens
   * 
   * Creates:
   * - Access Token: Short-lived token for API requests (1 hour)
   * - Refresh Token: Long-lived token to get new access token (24 hours)
   * 
   * JWT Structure: header.payload.signature
   * - Payload contains: userId, email, role
   * - Signature ensures token wasn't tampered with
   */
  private async generateTokens(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    // Access token payload
    const accessTokenPayload = {
      sub: user.id,        // subject (user id)
      email: user.email,
      role: user.role,
    };

    // Refresh token payload
    const refreshTokenPayload = {
      sub: user.id,
      type: 'refresh',
    };

    // Sign tokens
    // sign() creates the JWT by combining payload + secret
    const accessToken = this.jwt.sign(accessTokenPayload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRATION || '1h',
    });

    const refreshToken = this.jwt.sign(refreshTokenPayload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRATION || '24h',
    });

    return { accessToken, refreshToken };
  }

  /**
   * Verify Access Token
   * 
   * Called by guards to verify token is valid
   * Returns decoded payload if valid
   */
  verifyAccessToken(token: string) {
    try {
      return this.jwt.verify(token, {
        secret: process.env.JWT_SECRET,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  /**
   * Refresh Access Token
   * 
   * Takes refresh token and returns new access token
   * Allows user to stay logged in without relogging
   */
  async refreshAccessToken(refreshToken: string) {
    try {
      const decoded = this.jwt.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      const newAccessToken = this.jwt.sign(
        {
          sub: user.id,
          email: user.email,
          role: user.role,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRATION || '1h',
        }
      );

      return newAccessToken;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
```

**Security Concepts**:

```
ARGON2 PASSWORD HASHING

Process:
Password123! → Argon2 Hash Function → $argon2id$v=19$m=65540$...very long string...
              (one-way, cannot be reversed)

Verification:
User enters "Password123!" → Hash → Compare with stored hash → Match? ✅

Why not just store passwords?
❌ If database is breached, attacker has all passwords
✓ With hashing, attacker gets useless hash strings
✓ Even with hash, attacking takes billions of years

JWT TOKENS

Structure:
┌──────────┬──────────────┬──────────────┐
│ HEADER   │ PAYLOAD      │ SIGNATURE    │
├──────────┼──────────────┼──────────────┤
│ typ:JWT  │ userId:123   │ HMAC(       │
│ alg:HS   │ email:user@  │   secret +  │
│ 256      │ exp:1234567  │   header +  │
│          │              │   payload   │
│          │              │ )           │
└──────────┴──────────────┴──────────────┘

Flow:
1. User logs in → Server creates JWT with user info
2. Client stores token (localStorage/cookie)
3. Client sends token with each request
4. Server verifies token hasn't been tampered with
5. Extract user info from token (no database lookup needed!)

Why stateless?
- No server session storage
- Scales to millions of users
- Works with multiple servers
```

### Step 4: Create JWT Strategy

Create `src/auth/strategies/jwt.strategy.ts`:

```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * JWT Strategy for Passport
 * 
 * Automatically validates JWT tokens on protected routes
 * Extracts user info from token
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      // Extract JWT from Authorization header: "Bearer <token>"
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      
      // Secret to verify signature
      secretOrKey: process.env.JWT_SECRET,
      
      // Fail if token expired
      ignoreExpiration: false,
    });
  }

  /**
   * Validate extracted payload
   * 
   * Called after JWT is verified as authentic
   * Can do additional business logic here
   */
  async validate(payload: any) {
    // Fetch full user object from database
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Return user object (attached to request.user)
    return user;
  }
}
```

### Step 5: Create Auth Resolver

Create `src/auth/auth.resolver.ts`:

```typescript
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthEntity } from './entities/auth.entity';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/signup.input';
import { SignInInput } from './dto/signin.input';

/**
 * Auth Resolver
 * 
 * GraphQL endpoints for authentication
 * Exposes:
 * - signup mutation
 * - signin mutation
 * - refresh mutation
 */
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthEntity, {
    description: 'Register new user account',
  })
  async signup(@Args('input') input: SignUpInput) {
    return this.authService.signup(input);
  }

  @Mutation(() => AuthEntity, {
    description: 'Login with email and password',
  })
  async signin(@Args('input') input: SignInInput) {
    return this.authService.signin(input);
  }

  @Mutation(() => String, {
    description: 'Get new access token using refresh token',
  })
  async refreshAccessToken(
    @Args('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshAccessToken(refreshToken);
  }
}
```

### Step 6: Create Auth Module

Create `src/auth/auth.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';

/**
 * Auth Module
 * 
 * Contains all authentication logic
 * Provides Auth guards and strategies to other modules
 */
@Module({
  imports: [
    PrismaModule,
    
    // Passport authentication framework
    PassportModule.register({ defaultStrategy: 'jwt' }),
    
    // JWT token signing
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [AuthService, JwtModule, PassportModule],
})
export class AuthModule {}
```

### Step 7: Update Main App Module

Edit `src/app.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Environment variables
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // GraphQL (Apollo Server)
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      introspection: true,  // Allow schema introspection
      playground: true,     // GraphQL playground
      context: ({ req }) => ({ req }),  // Pass request to resolvers
    }),

    // Database
    PrismaModule,

    // Authentication
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

### Step 8: Test Authentication

```bash
npm run start:dev

# Open http://localhost:3002 to access GraphQL Playground

# Test signup mutation:
mutation {
  signup(input: {
    email: "john@example.com"
    password: "SecurePass123!@"
    firstName: "John"
    lastName: "Doe"
  }) {
    accessToken
    refreshToken
    user {
      id
      email
      firstName
      role
    }
  }
}

# Test signin mutation:
mutation {
  signin(input: {
    email: "john@example.com"
    password: "SecurePass123!@"
  }) {
    accessToken
    refreshToken
    user {
      id
      email
    }
  }
}
```

---

## Phase 4: Authorization & Security (Week 6)

### What You'll Learn

- Guards (middleware for route protection)
- Role-based access control (RBAC)
- Custom decorators
- Permission checking

### Step 1: Create JWT Guard

Create `src/auth/guards/access-token.guard.ts`:

```typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Access Token Guard
 * 
 * Protects GraphQL resolvers
 * Ensures:
 * 1. Request has Authorization header with JWT token
 * 2. Token is valid and not expired
 * 3. User exists in database
 * 
 * Usage: @UseGuards(AccessTokenGuard)
 */
@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    if (err || !user) {
      throw new UnauthorizedException(
        'You must be logged in to access this resource'
      );
    }

    return user;
  }
}
```

### Step 2: Create Roles Guard

Create `src/auth/guards/roles.guard.ts`:

```typescript
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * Roles Guard
 * 
 * Checks if user has required role
 * Works with @Roles() decorator
 * 
 * Usage: @UseGuards(AccessTokenGuard, RolesGuard) @Roles('ADMIN')
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Get required roles from @Roles() decorator
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    // If no @Roles() decorator, allow access
    if (!requiredRoles) {
      return true;
    }

    // Get GraphQL context
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;

    // Check if user has required role
    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException(
        `You need ${requiredRoles.join(' or ')} role to access this`
      );
    }

    return true;
  }
}
```

### Step 3: Create Roles Decorator

Create `src/auth/decorators/roles.decorator.ts`:

```typescript
import { SetMetadata } from '@nestjs/common';

/**
 * @Roles() Decorator
 * 
 * Marks which roles can access a resolver
 * Works with RolesGuard
 * 
 * Usage: @Roles('ADMIN') or @Roles('ADMIN', 'USER')
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

### Step 4: Create Current User Decorator

Create `src/auth/decorators/current-user.decorator.ts`:

```typescript
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * @CurrentUser() Decorator
 * 
 * Injects current logged-in user into resolver
 * Works with AccessTokenGuard
 * 
 * Usage: @CurrentUser() user
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);
```

### Step 5: Create User Entity

Create `src/global/user/entities/user.entity.ts`:

```typescript
import { ObjectType, Field, Enum } from '@nestjs/graphql';

enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

/**
 * User Entity
 * 
 * GraphQL type representing a user
 * Defines which fields are exposed in API
 */
@ObjectType()
export class UserEntity {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field(() => String)
  role: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  // Note: hashedPassword is NOT exposed in GraphQL!
  // This is important for security
}
```

### Step 6: Test Authorization

```bash
npm run start:dev

# Test protected query:
# First, copy the accessToken from signup response

query {
  me {
    id
    email
    role
  }
}

# Add header in GraphQL Playground:
# Headers tab: { "Authorization": "Bearer YOUR_ACCESS_TOKEN" }

# Without token: Should get "You must be logged in" error
# With expired token: Should get "Invalid or expired token" error
# With valid token: Should get user info
```

---

## Phase 5: API Resolvers & Business Logic (Weeks 7-8)

### What You'll Learn

- CRUD operations (Create, Read, Update, Delete)
- Complex queries and mutations
- Relationships in GraphQL
- Pagination and filtering

### Step 1: Create User Resolver

Create `src/global/user/user.resolver.ts`:

```typescript
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { AccessTokenGuard } from '../../auth/guards/access-token.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';

/**
 * User Resolver
 * 
 * GraphQL endpoints for user management
 * Exposes:
 * - me query (current user)
 * - user query (fetch by id)
 * - users query (list all users)
 * - updateProfile mutation
 * - updateUser mutation (admin only)
 */
@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private userService: UserService) {}

  // ============== QUERIES ==============

  /**
   * Get Current User
   * 
   * Returns logged-in user's information
   * Protected by AccessTokenGuard
   */
  @Query(() => UserEntity, {
    description: 'Get current logged-in user',
  })
  @UseGuards(AccessTokenGuard)
  async me(@CurrentUser() user: any) {
    return this.userService.getUserById(user.id);
  }

  /**
   * Get Single User by ID
   * 
   * Anyone can fetch another user's public info
   * Full details only visible to admins or the user themselves
   */
  @Query(() => UserEntity, {
    description: 'Get user by ID',
    nullable: true,
  })
  async user(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  /**
   * List All Users
   * 
   * Admin only endpoint
   * Returns paginated list of users
   */
  @Query(() => [UserEntity], {
    description: 'List all users (admin only)',
  })
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles('ADMIN')
  async users(
    @Args('skip', { type: () => Number, nullable: true }) skip = 0,
    @Args('take', { type: () => Number, nullable: true }) take = 10,
  ) {
    return this.userService.listUsers({ skip, take });
  }

  // ============== MUTATIONS ==============

  /**
   * Update Current User's Profile
   * 
   * User can update their own information
   * Protected by AccessTokenGuard
   */
  @Mutation(() => UserEntity, {
    description: 'Update current user profile',
  })
  @UseGuards(AccessTokenGuard)
  async updateProfile(
    @CurrentUser() user: any,
    @Args('firstName', { nullable: true }) firstName?: string,
    @Args('lastName', { nullable: true }) lastName?: string,
  ) {
    return this.userService.updateUser(user.id, {
      firstName,
      lastName,
    });
  }

  /**
   * Update Any User (Admin Only)
   * 
   * Admin can change user roles and other properties
   * Protected by AccessTokenGuard + RolesGuard
   */
  @Mutation(() => UserEntity, {
    description: 'Update user (admin only)',
  })
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles('ADMIN')
  async updateUser(
    @Args('id') id: string,
    @Args('role', { nullable: true }) role?: string,
    @Args('firstName', { nullable: true }) firstName?: string,
  ) {
    return this.userService.updateUser(id, {
      role,
      firstName,
    });
  }

  /**
   * Delete User (Admin Only)
   * 
   * Soft delete user account
   * Protected by AccessTokenGuard + RolesGuard
   */
  @Mutation(() => Boolean, {
    description: 'Delete user (admin only)',
  })
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles('ADMIN')
  async deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
```

### Step 2: Create User Service

Create `src/global/user/user.service.ts`:

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * User Service
 * 
 * Contains business logic for user operations
 * - Fetch user data
 * - Update user information
 * - Delete users
 * - Manage user list
 */
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get user by ID
   */
  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: {
          include: {
            department: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  /**
   * List users with pagination
   */
  async listUsers(options: { skip: number; take: number }) {
    return this.prisma.user.findMany({
      skip: options.skip,
      take: options.take,
      orderBy: { createdAt: 'desc' },
      include: {
        profile: true,
      },
    });
  }

  /**
   * Update user information
   */
  async updateUser(id: string, data: any) {
    // Ensure user exists
    await this.getUserById(id);

    // Update only provided fields
    return this.prisma.user.update({
      where: { id },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        // Don't update role if provided by user
        role: data.role,
      },
      include: {
        profile: true,
      },
    });
  }

  /**
   * Delete user
   */
  async deleteUser(id: string) {
    await this.getUserById(id);

    await this.prisma.user.delete({
      where: { id },
    });

    return true;
  }

  /**
   * Get user by email
   * Used in authentication
   */
  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
```

### Step 3: Create User Module

Create `src/global/user/user.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
```

### Step 4: Create Department Module

Create `src/global/department/department.entity.ts`:

```typescript
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class DepartmentEntity {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
```

Create `src/global/department/department.service.ts`:

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async createDepartment(name: string, description?: string) {
    return this.prisma.department.create({
      data: {
        name,
        description,
      },
    });
  }

  async listDepartments() {
    return this.prisma.department.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async getDepartmentById(id: string) {
    return this.prisma.department.findUnique({
      where: { id },
    });
  }
}
```

Create `src/global/department/department.resolver.ts`:

```typescript
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { DepartmentEntity } from './department.entity';
import { DepartmentService } from './department.service';
import { AccessTokenGuard } from '../../auth/guards/access-token.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';

@Resolver(() => DepartmentEntity)
export class DepartmentResolver {
  constructor(private departmentService: DepartmentService) {}

  @Query(() => [DepartmentEntity])
  @UseGuards(AccessTokenGuard)
  async departments() {
    return this.departmentService.listDepartments();
  }

  @Mutation(() => DepartmentEntity)
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles('ADMIN')
  async createDepartment(
    @Args('name') name: string,
    @Args('description', { nullable: true }) description?: string,
  ) {
    return this.departmentService.createDepartment(name, description);
  }
}
```

Create `src/global/department/department.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { DepartmentResolver } from './department.resolver';
import { DepartmentService } from './department.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DepartmentResolver, DepartmentService],
  exports: [DepartmentService],
})
export class DepartmentModule {}
```

### Step 5: Create Global Module

Create `src/global/global.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [UserModule, DepartmentModule],
  exports: [UserModule, DepartmentModule],
})
export class GlobalModule {}
```

### Step 6: Update App Module

Edit `src/app.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      introspection: true,
      playground: true,
      context: ({ req }) => ({ req }),
    }),

    PrismaModule,
    AuthModule,
    GlobalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

### Step 7: Test Full API

```bash
npm run start:dev

# Test full flow in GraphQL Playground:

# 1. Signup
mutation {
  signup(input: {
    email: "admin@example.com"
    password: "AdminPass123!@"
    firstName: "Admin"
  }) {
    accessToken
    user { id email role }
  }
}

# Copy access token

# 2. Get current user (add Authorization header)
query {
  me {
    id
    email
    firstName
    role
  }
}

# 3. Create department (admin only)
mutation {
  createDepartment(
    name: "Engineering"
    description: "Engineering Department"
  ) {
    id
    name
  }
}

# 4. List departments
query {
  departments {
    id
    name
    description
  }
}

# 5. List all users (admin only)
query {
  users {
    id
    email
    firstName
    role
  }
}
```

---

## Security Features Implemented

### ✅ Layer 1: Transport Security
- Use HTTPS in production (configure in nginx/load balancer)
- Current setup uses plaintext (development only)

### ✅ Layer 2: Input Validation
- DTO validation (email format, password strength)
- Type checking via TypeScript
- Length and pattern matching

### ✅ Layer 3: Authentication
- Argon2 password hashing (GPU-resistant)
- JWT tokens with expiration
- Refresh token rotation
- Token stored in Authorization header (not localStorage)

### ✅ Layer 4: Authorization
- Role-based access control (USER, ADMIN)
- Guards protect GraphQL resolvers
- @Roles() decorator restricts endpoints
- @CurrentUser() injects authenticated user

### ✅ Layer 5: Data Security
- Prisma ORM prevents SQL injection
- Parameterized queries
- Foreign key constraints

### ✅ Layer 6: Error Handling
- No sensitive data in errors
- Safe error messages to clients
- Internal logging for debugging

### ✅ Layer 7: Other Security Measures
- Password validation (8+ chars, uppercase, lowercase, number, special char)
- Email uniqueness constraint
- CORS configuration (restrict origins)
- Rate limiting (optional, add later)

---

## Testing & Deployment

### Step 1: Unit Testing

Create `src/auth/auth.service.spec.ts`:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
              create: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
            verify: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signup', () => {
    it('should create new user', async () => {
      const input = {
        email: 'test@example.com',
        password: 'Password123!@',
        firstName: 'Test',
      };

      const newUser = {
        id: '123',
        ...input,
        role: 'USER',
      };

      jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(null);
      jest.spyOn(prisma.user, 'create').mockResolvedValue(newUser);

      // Test signup
      // expect result to have accessToken, refreshToken, user
    });
  });
});
```

### Step 2: Building for Production

```bash
# Build TypeScript
npm run build

# This creates dist/ folder with compiled JavaScript

# Start production server
npm run start:prod

# Or with environment variables
NODE_ENV=production npm run start:prod
```

### Step 3: Docker Deployment

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=builder /app/dist ./dist
COPY .env .env

EXPOSE 3002

CMD ["node", "dist/main.js"]
```

```bash
# Build Docker image
docker build -t hisd3-backend:latest .

# Run container
docker run -p 3002:3002 \
  -e DATABASE_URL="postgresql://user:password@db:5432/hisd3_prod" \
  hisd3-backend:latest
```

---

## Common Issues & Solutions

### Issue: "Cannot find module '@nestjs/graphql'"

**Solution:**
```bash
npm install @nestjs/graphql @nestjs/apollo apollo-server-express graphql
npm install --save-dev ts-node typescript
```

### Issue: "PostgreSQL connection refused"

**Solution:**
```bash
# Start PostgreSQL service
# Windows: Check Services > PostgreSQL Server
# macOS: brew services restart postgresql
# Linux: sudo systemctl start postgresql

# Verify credentials in .env
cat .env | grep DATABASE_URL
```

### Issue: "JWT Token is invalid"

**Solution:**
```bash
# Ensure:
# 1. Token is in Authorization header: "Bearer <token>"
# 2. JWT_SECRET matches between signing and verifying
# 3. Token hasn't expired
# 4. Check token format: header.payload.signature
```

### Issue: "Cannot find module 'prisma/client'"

**Solution:**
```bash
npm install @prisma/client

# Regenerate Prisma client
npx prisma generate
```

### Issue: "ValidationException: Validation failed"

**Solution:**
```bash
# Ensure class-validator is installed
npm install class-validator class-transformer

# Decorate DTO fields with validators:
# @IsEmail()
# @MinLength(8)
# @Matches(/regex/)
```

---

##Learning Milestones Checklist

- [ ] **Week 1**: NestJS project created, can start dev server
- [ ] **Week 2-3**: Database connected, Prisma models working
- [ ] **Week 4-5**: Signup/signin working, JWT tokens generating
- [ ] **Week 6**: Guards working, can login and access protected endpoints
- [ ] **Week 7-8**: CRUD operations complete, admin endpoints working
- [ ] **Week 9-10**: Testing written, production build working
- [ ] **Production Ready**: Deployed with secure configuration

---

## Next Steps After Build

1. **Add Real-World Features**
   - Ticket management system
   - Email notifications
   - File uploads
   - Search and filtering

2. **Implement Advanced Security**
   - Rate limiting (prevent brute force)
   - Request logging (audit trail)
   - 2FA (two-factor authentication)
   - Session management

3. **Optimize Performance**
   - Database indexing
   - Query optimization
   - Caching (Redis)
   - Load testing

4. **Setup CI/CD**
   - Automated testing
   - Auto-deploy on merge
   - Docker registry

5. **Monitoring & Maintenance**
   - Error tracking (Sentry)
   - Performance monitoring (DataDog)
   - Health checks
   - Backup strategy

---

## Resources & References

**Official Docs:**
- [NestJS Documentation](https://docs.nestjs.com)
- [GraphQL Docs](https://graphql.org/learn/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [JWT Intro](https://jwt.io/introduction)
- [OWASP Security](https://owasp.org/www-project-top-ten/)

**YouTube Tutorials:**
- NestJS GraphQL Tutorial by Fireship
- JWT Authentication Explained
- Prisma Database Setup Guide

**Community:**
- [NestJS Discord](https://discord.gg/G7Qnnhy)
- [GraphQL Community Slack](https://graphql.org/community/where-to-get-help/)
- Stack Overflow (tag: nestjs, graphql)

---

**Happy Building! 🚀**

Remember: Security is not optional. Always validate input, hash passwords, verify tokens, and handle errors safely.
