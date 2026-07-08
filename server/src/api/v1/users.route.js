import express from "express";
import usersController from "../../modules/Users/users.controller.js";
import { requireAuth } from "../../modules/Auth/auth.middleware.js";

const router = express.Router();

router.post("/", usersController.createUser);
router.put("/me", requireAuth, usersController.updateMe);
router.delete("/me", requireAuth, usersController.deleteMe);
router.get("/search", requireAuth, usersController.findUser);

export default router;
