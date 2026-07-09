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

  const normalizedPhone = validatePhoneNumber(query);
  const orConditions = [
    {
      email: {
        contains: query,
        mode: "insensitive",
      },
    },
  ];

  if (normalizedPhone) {
    orConditions.push({ phone: normalizedPhone });
  } else {
    const digits = query.replace(/\D/g, "");
    if (digits.length >= 3) {
      orConditions.push({
        phone: {
          contains: digits,
          mode: "insensitive",
        },
      });
    }
  }

  return prisma.users.findMany({
    where: {
      OR: orConditions,
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

  if (data?.phone) {
    const normalizedPhone = validatePhoneNumber(data.phone);
    if (!normalizedPhone) {
      throw new CustomError("Invalid Nigerian phone number", 400);
    }
    data.phone = normalizedPhone;
  }

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

async function deleteUserById(id) {
  if (!id) throw new CustomError("User id is required", 400);

  const rooms = await prisma.rooms.findMany({
    where: {
      participants: {
        some: {
          user_id: id,
        },
      },
    },
    select: {
      id: true,
    },
  });

  const roomIds = rooms.map((room) => room.id);

  if (roomIds.length > 0) {
    await prisma.messages.deleteMany({
      where: {
        OR: [{ sender_id: id }, { room_id: { in: roomIds } }],
      },
    });
    await prisma.roomParticipant.deleteMany({
      where: {
        OR: [{ user_id: id }, { room_id: { in: roomIds } }],
      },
    });
    await prisma.rooms.deleteMany({
      where: {
        id: { in: roomIds },
      },
    });
  } else {
    await prisma.messages.deleteMany({ where: { sender_id: id } });
    await prisma.roomParticipant.deleteMany({ where: { user_id: id } });
  }

  return prisma.users.delete({ where: { id } });
}

export default {
  createUser,
  findByEmailorPhone,
  findByEmail,
  findByPhone,
  findById,
  updateUser,
  deleteUserById,
};
