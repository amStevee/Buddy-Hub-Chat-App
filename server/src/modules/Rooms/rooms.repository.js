import { prisma } from "../../core/prisma.js";

async function findAll(user_id) {
  return prisma.rooms.findMany({
    where: {
      participants: {
        some: {
          user_id,
          hidden: false,
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
    include: {
      participants: {
        include: {
          user: true,
        },
      },
    },
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

async function findByIdForUser(id, user_id) {
  return prisma.rooms.findFirst({
    where: {
      id,
      participants: {
        some: {
          user_id,
          hidden: false,
        },
      },
    },
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
  return prisma.rooms.create({
    data,
    include: {
      participants: {
        include: {
          user: true,
        },
      },
    },
  });
}

async function restoreParticipantIfHidden(roomId, userId) {
  return prisma.roomParticipant.updateMany({
    where: {
      room_id: roomId,
      user_id: userId,
      hidden: true,
    },
    data: {
      hidden: false,
    },
  });
}

async function hideParticipant(roomId, userId) {
  return prisma.roomParticipant.updateMany({
    where: {
      room_id: roomId,
      user_id: userId,
    },
    data: {
      hidden: true,
    },
  });
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
  findByIdForUser,
  createRoom,
  restoreParticipantIfHidden,
  hideParticipant,
  listMessages,
};
