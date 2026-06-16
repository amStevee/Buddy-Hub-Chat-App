import express from "express";
import authRoutes from "../../api/v1/auth.route.js";
import userRoutes from "../../modules/Users/users.route.js";
import roomsRoutes from "../../api/v1/rooms.route.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/rooms", roomsRoutes);

export default router;
