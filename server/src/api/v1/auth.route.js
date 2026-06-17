import express from "express";
import authController from "../../modules/Auth/auth.controller.js";
import { requireAuth } from "../../modules/Auth/auth.middleware.js";

const router = express.Router();

router.post("/register", authController.register);
router.post("/verify", authController.verify);
router.post("/resend", authController.resend);
router.post("/login", authController.login);
router.get("/me", requireAuth, authController.me);

export default router;
