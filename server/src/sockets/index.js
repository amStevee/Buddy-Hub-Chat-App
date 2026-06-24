import { verifyJwt } from "../core/jwt.js";
import { prisma } from "../core/prisma.js";

function makeRoomNameFromParticipants(participants = []) {
  return `room:${participants.sort().join(":")}`;
}

export default function initSockets(io) {
  io.use((socket, next) => {
    try {
      const token =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.authorization?.split?.(" ")?.[1];
      if (!token) return next();
      const payload = verifyJwt(token);
      socket.user = payload;
      return next();
    } catch (err) {
      return next();
    }
  });

  io.on("connection", (socket) => {
    const userId = socket.user?.id || null;
    console.log("socket connected", socket.id, "user:", userId);

    socket.on("join", async ({ room }) => {
      if (!room) return;
      socket.join(room);
    });

    socket.on("leave", ({ room }) => {
      if (!room) return;
      socket.leave(room);
    });

    socket.on("create_room", async ({ participants }, cb) => {
      try {
        if (!Array.isArray(participants) || participants.length === 0) {
          throw new Error("participants required");
        }
        const name = makeRoomNameFromParticipants(participants);
        let room = await prisma.rooms.findFirst({
          where: {
            name,
          },
        });
        if (!room) {
          room = await prisma.rooms.create({
            data: {
              name,
              participants: {
                create: participants.map((userId) => ({
                  user_id: userId,
                })),
              },
            },
            include: {
              participants: {
                include: {
                  user: true,
                },
              },
            },
          });
        }
        cb && cb(null, { room });
      } catch (err) {
        cb && cb(err.message || "error");
      }
    });

    socket.on("message", async ({ roomId, text }, cb) => {
      try {
        if (!roomId || !text) throw new Error("roomId and text required");

        // create message record
        const message = await prisma.messages.create({
          data: {
            text,
            sender_id: userId || "",
            room_id: roomId,
          },
        });

        const payload = {
          id: message.id,
          text: message.text,
          sender_id: message.sender_id,
          room_id: message.room_id,
          created_at: message.created_at,
        };

        io.to(roomId).emit("message", payload);
        cb && cb(null, payload);
      } catch (err) {
        cb && cb(err.message || "error");
      }
    });

    socket.on("disconnect", () => {
      console.log("socket disconnected", socket.id);
    });
  });
}
