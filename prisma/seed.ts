import { PrismaClient, UserRole } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('password');
  const department = await prisma.department.upsert({
    where: { name: 'Engineering' },
    update: {},
    create: {
      name: 'Engineering',
      description: 'Default seeded department',
    },
  });

  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      firstName: 'Admin',
      lastName: 'User',
      hashedPassword: password,
      role: UserRole.ADMIN,
      profile: {
        create: {
          departmentId: department.id,
          phone: '0000000000',
          bio: 'Seeded administrator profile',
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
