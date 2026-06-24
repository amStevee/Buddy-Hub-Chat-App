import authService from "../Auth/auth.service.js";
import userService from "./users.service.js";
import { checkUserRequestBody } from "./users.validation.js";

async function createUser(req, res) {
  try {
    const userData = checkUserRequestBody(req.body);
    const user = await userService.createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

async function findUser(req, res) {
  try {
    const user = await userService.findUser(req.query.q);

    res.status(200).json({ user });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default {
  createUser,
  findUser,
};
