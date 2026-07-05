import { prisma } from "../../core/prisma.js";
import { CustomError } from "../../core/ErrorHandler.js";
import { hashPassword } from "../../core/utils.js";

function validatePhoneNumber(phone) {
  if (!phone || typeof phone !== "string") return null;
  // remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  // Nigerian numbers: local format 0XXXXXXXXXX (11 digits) or international 234XXXXXXXXXX
  if (/^234\d{10}$/.test(digits)) {
    // convert +234... to 0...
    return digits.replace(/^234/, "0");
  }

  if (/^0\d{10}$/.test(digits)) return digits;

  if (/^\d{10}$/.test(digits)) {
    // missing leading zero
    return `0${digits}`;
  }

  // not a valid Nigerian phone for our purposes
  return null;
}

async function createUser({ first_name, last_name, phone, email, password }) {
  if (!first_name || !last_name || !phone || !email || !password) {
    throw new CustomError("Missing required fields", 400);
  }

  const normalizedPhone = validatePhoneNumber(phone);
  if (!normalizedPhone) throw new CustomError("Invalid Nigerian phone number", 400);

  const isUser = await prisma.users.findFirst({
    where: {
      OR: [{ email }, { phone: normalizedPhone }],
    },
  });

  if (isUser) throw new CustomError("User already exists", 400);

  const password_hash = await hashPassword(password);

  const result = await prisma.users.create({
    data: {
      first_name,
      last_name,
      phone: normalizedPhone,
      email,
      password_hash,
    },
  });

  return result;
}

async function findByEmailorPhone(query) {
  if (!query) throw new CustomError("User not found", 400);
  return prisma.users.findMany({
    where: {
      OR: [
        {email: {
        contains: query,
        mode: "insensitive",
      }},
      {phone: {
        contains: query,
        mode: "insensitive",
      }},
      ]
    },

    include: {
      messages: true
    }
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

async function updateUser() {}

export default {
  createUser,
  findByEmailorPhone,
  findByEmail,
  findByPhone,
  findById,
  updateUser,
};
