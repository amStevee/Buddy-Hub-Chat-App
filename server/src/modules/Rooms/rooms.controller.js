import roomsRepo from "./rooms.repository.js";
import { CustomError } from "../../core/ErrorHandler.js";

async function listRooms(req, res) {
  try {
    const rooms = await roomsRepo.findAll();
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
      room = await roomsRepo.createRoom({ name });
    }
    res.status(201).json(room);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
}

async function listMessages(req, res) {
  try {
    const { id } = req.params;
    const msgs = await roomsRepo.listMessages(id);
    res.status(200).json(msgs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default {
  listRooms,
  createRoom,
  listMessages,
};
