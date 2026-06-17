import userRepo from "../Users/users.repository.js";
import { comparePassword } from "../../core/utils.js";
import { CustomError } from "../../core/ErrorHandler.js";
import { signJwt } from "../../core/jwt.js";

function validateLoginPayload(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new CustomError("Invalid request body", 400);
  }

  const { email, password } = body;
  if (!email?.trim() || !password) {
    throw new CustomError("Email and password are required", 400);
  }

  return { email: email.trim(), password };
}

async function login(body) {
  const { email, password } = validateLoginPayload(body);

  const user = await userRepo.findByEmail(email);
  if (!user) {
    throw new CustomError("Invalid email or password", 401);
  }

  const passwordMatch = await comparePassword(password, user.password_hash);
  if (!passwordMatch) {
    throw new CustomError("Invalid email or password", 401);
  }

  const token = signJwt({ id: user.id, email: user.email, phone: user.phone });
  return { user, token };
}

async function me(userId) {
  const user = await userRepo.findById(userId);
  if (!user) {
    throw new CustomError("User not found", 404);
  }

  return user;
}

export default {
  login,
  me,
};
