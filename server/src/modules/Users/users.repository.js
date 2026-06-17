import { prisma } from "../../core/prisma.js";
import { CustomError } from "../../core/ErrorHandler.js";
import { hashPassword } from "../../core/utils.js";

async function createUser({ first_name, last_name, phone, email, password }) {
  if (!first_name || !last_name || !phone || !email || !password) {
    throw new CustomError("Missing required fields", 400);
  }

  const isUser = await prisma.users.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  });

  if (isUser) throw new CustomError("User already exists", 400);

  const password_hash = await hashPassword(password);

  const result = await prisma.users.create({
    data: {
      first_name,
      last_name,
      phone,
      email,
      password_hash,
    },
  });

  return result;
}

async function findByEmail(email) {
  if (!email) return null;
  return prisma.users.findUnique({ where: { email } });
}

async function findByPhone(phone) {
  if (!phone) return null;
  return prisma.users.findUnique({ where: { phone } });
}

async function findById(id) {
  if (!id) return null;
  return prisma.users.findUnique({ where: { id } });
}

async function updateUser() {}

export default {
  createUser,
  findByEmail,
  findByPhone,
  findById,
  updateUser,
};
