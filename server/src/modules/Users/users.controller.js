import authService from "../Auth/auth.service.js";
import userService from "./users.service.js";
import {
  checkUserRequestBody,
  validatePhoneNumber,
} from "./users.validation.js";
import { CustomError } from "../../core/ErrorHandler.js";

async function createUser(req, res) {
  try {
    const userData = checkUserRequestBody(req.body);

    const normalizedPhone = validatePhoneNumber(userData.phone);

    if (normalizedPhone === null)
      throw new CustomError("Invalid Nigerian phone number", 400);

    const user = await userService.createUser({
      ...userData,
      phone: normalizedPhone,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

async function findUser(req, res) {
  try {
    const user = await userService.findUser(req.query.q, req.user.id);

    res.status(200).json({ user });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

async function deleteMe(req, res) {
  try {
    await userService.deleteUser(req.user.id);
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

async function updateMe(req, res) {
  try {
    const updates = {};
    const payload = checkUserRequestBody(req.body);

    if (typeof payload.first_name === "string") {
      const firstName = payload.first_name.trim();
      if (!firstName) throw new CustomError("First name is required", 400);
      updates.first_name = firstName;
    }

    if (typeof payload.last_name === "string") {
      const lastName = payload.last_name.trim();
      if (!lastName) throw new CustomError("Last name is required", 400);
      updates.last_name = lastName;
    }

    if (typeof payload.email === "string") {
      const email = payload.email.trim();
      if (!email) throw new CustomError("Email is required", 400);
      updates.email = email;
    }

    if (typeof payload.phone === "string") {
      const normalizedPhone = validatePhoneNumber(payload.phone);
      if (!normalizedPhone)
        throw new CustomError("Invalid Nigerian phone number", 400);
      updates.phone = normalizedPhone;
    }

    if (Object.keys(updates).length === 0) {
      throw new CustomError("No valid fields to update", 400);
    }

    const user = await userService.updateUser(req.user.id, updates);
    res.status(200).json({ user });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default {
  createUser,
  findUser,
  deleteMe,
  updateMe,
};
