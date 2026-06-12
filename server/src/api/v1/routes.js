import express from "express";
import userRoutes from "../../modules/Users/users.route.js";

const router = express.Router();

router.use("/users", userRoutes);

export default router;
