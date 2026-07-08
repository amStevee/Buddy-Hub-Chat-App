import roomsRepo from "./rooms.repository.js";
import { CustomError } from "../../core/ErrorHandler.js";

async function listRooms(req, res) {
  try {
    const rooms = await roomsRepo.findAll(req.user.id);
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createRoom(req, res) {
  try {
    const { participants } = req.body;
    if (!Array.isArray(participants) || participants.length === 0) {
      throw new CustomError("participants required", 400);
    }

    const name = `room:${participants.sort().join(":")}`;
    let room = await roomsRepo.findByName(name);

    if (!room) {
      room = await roomsRepo.createRoom({
        name,
        participants: {
          create: participants.map((userId) => ({
            user_id: userId,
          })),
        },
      });
    } else if (req.user?.id) {
      await roomsRepo.restoreParticipantIfHidden(room.id, req.user.id);
    }

    res.status(201).json(room);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
}

async function listMessages(req, res) {
  try {
    const { id } = req.params;
    const room = await roomsRepo.findByIdForUser(id, req.user.id);
    if (!room) {
      throw new CustomError("Room not found", 404);
    }
    const msgs = await roomsRepo.listMessages(id);
    res.status(200).json(msgs);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
}

async function findParticipants(req, res) {
  try {
    const room = await roomsRepo.findByIdForUser(
      req.params.roomId,
      req.user.id,
    );
    if (!room) {
      throw new CustomError("Room not found", 404);
    }
    res.status(200).json(room);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
}

async function leaveRoom(req, res) {
  try {
    const { roomId } = req.params;
    await roomsRepo.hideParticipant(roomId, req.user.id);
    res.status(200).json({ message: "Contact removed" });
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
}

export default {
  listRooms,
  createRoom,
  listMessages,
  findParticipants,
  leaveRoom,
};
