import { prisma } from "../../core/prisma.js";

async function findAll(user_id) {
  return prisma.rooms.findMany({
    where: {
      participants: {
        some: {
          user_id,
        },
      },
    },
    include: {
      participants: {
        include: {
          user: true,
        },
      },

      messages: {
        orderBy: {
          created_at: "asc",
        },
      },
    },
    orderBy: { created_at: "desc" },
  });
}

async function findByName(name) {
  return prisma.rooms.findFirst({
    where: { name },
  });
}

async function findById(id) {
  return prisma.rooms.findUnique({
    where: { id },
    include: {
      participants: {
        include: {
          user: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
            },
          },
        },
      },
    },
  });
}

async function createRoom(data) {
  return prisma.rooms.create({ data });
}

async function listMessages(roomId) {
  return prisma.messages.findMany({
    where: { room_id: roomId },
    orderBy: { created_at: "asc" },
  });
}

export default {
  findAll,
  findByName,
  findById,
  createRoom,
  listMessages,
};
