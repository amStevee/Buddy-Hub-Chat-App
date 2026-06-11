import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/index.js";
import { hashPassword } from "../src/core/utils.js";
// import { PrismaClient } from "../src/generated/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.users.deleteMany({});

  const alice = await prisma.users.upsert({
    where: { email: "alice@example.com" },
    update: {},
    create: {
      first_name: "Alice",
      last_name: "Smith",
      email: "alice@example.com",
      password_hash: await hashPassword("string"),
    },
  });
  const bob = await prisma.users.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      first_name: "Bob",
      last_name: "Johnson",
      email: "bob@example.com",
      password_hash: await hashPassword("string"),
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
