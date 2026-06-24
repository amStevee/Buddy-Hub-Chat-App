import express from "express";
import roomsController from "../../modules/Rooms/rooms.controller.js";
import { requireAuth } from "../../modules/Auth/auth.middleware.js";

const router = express.Router();

router.get("/", requireAuth, roomsController.listRooms);
router.post("/", requireAuth, roomsController.createRoom);
router.get("/:roomId", requireAuth, roomsController.findParticipants);
router.get("/:id/messages", requireAuth, roomsController.listMessages);

export default router;
