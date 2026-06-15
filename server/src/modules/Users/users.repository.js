import { prisma } from "../../core/prisma.js";
import { CustomError } from "../../core/ErrorHandler.js";
import bcrypt from "bcrypt";
import { hashPassword } from "../../core/utils.js";

async function createUser({ first_name, last_name, phone, email, password }) {
  if (!first_name || !last_name || !phone || !email || !password) {
    throw new CustomError("Missing required fields", 400);
  }
  const isUser = await prisma.users.findUnique({ where: { email } });

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

async function updateUser() {}

export default {
  createUser,
  updateUser,
};
