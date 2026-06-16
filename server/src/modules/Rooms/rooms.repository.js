import { prisma } from "../../core/prisma.js";

async function findAll() {
  return prisma.rooms.findMany({ orderBy: { created_at: "desc" } });
}

async function findByName(name) {
  return prisma.rooms.findFirst({ where: { name } });
}

async function findById(id) {
  return prisma.rooms.findUnique({ where: { id } });
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
