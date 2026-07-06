import { prisma } from "../../core/prisma.js";
import { CustomError } from "../../core/ErrorHandler.js";
import { hashPassword } from "../../core/utils.js";
import { validatePhoneNumber } from "./users.validation.js";

async function createUser({ first_name, last_name, phone, email, password }) {
  if (!first_name || !last_name || !phone || !email || !password) {
    throw new CustomError("Missing required fields", 400);
  }

  const normalizedPhone = validatePhoneNumber(phone);
  if (!normalizedPhone) {
    throw new CustomError("Invalid Nigerian phone number", 400);
  }

  const normalizedEmail = email.trim().toLowerCase();

  const isUser = await prisma.users.findFirst({
    where: {
      OR: [{ email: normalizedEmail }, { phone: normalizedPhone }],
    },
  });

  if (isUser) throw new CustomError("User already exists", 400);

  const password_hash = await hashPassword(password);

  try {
    const result = await prisma.users.create({
      data: {
        first_name,
        last_name,
        phone: normalizedPhone,
        email: normalizedEmail,
        password_hash,
      },
    });

    return result;
  } catch (error) {
    if (error?.code === "P2002") {
      throw new CustomError("User already exists", 400);
    }
    throw error;
  }
}

async function findByEmailorPhone(query) {
  if (!query) throw new CustomError("User not found", 400);
  return prisma.users.findMany({
    where: {
      OR: [
        {
          email: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          phone: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },

    include: {
      messages: true,
    },
  });
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

async function updateUser(id, data) {
  if (!id) throw new CustomError("User id is required", 400);

  try {
    return await prisma.users.update({
      where: { id },
      data,
    });
  } catch (error) {
    if (error?.code === "P2002") {
      throw new CustomError("Email or phone already exists", 400);
    }
    throw error;
  }
}

export default {
  createUser,
  findByEmailorPhone,
  findByEmail,
  findByPhone,
  findById,
  updateUser,
};
