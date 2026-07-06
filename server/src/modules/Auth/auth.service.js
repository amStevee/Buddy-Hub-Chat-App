import userRepo from "../Users/users.repository.js";
import { CustomError } from "../../core/ErrorHandler.js";
import OtpService from "../../core/otp/OtpService.js";
import { signJwt } from "../../core/jwt.js";
import { validatePhoneNumber } from "../Users/users.validation.js";

function standardizePhone(phone) {
  return phone.trim();
}

function validateRegisterPayload(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new CustomError("Invalid request body", 400);
  }

  const { first_name, last_name, email, phone, password } = body;
  if (
    !first_name?.trim() ||
    !last_name?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !password
  ) {
    throw new CustomError("Missing required fields", 400);
  }

  const normalizedPhone = validatePhoneNumber(phone);
  if (!normalizedPhone) {
    throw new CustomError("Invalid Nigerian phone number", 400);
  }

  return {
    first_name: first_name.trim(),
    last_name: last_name.trim(),
    email: email.trim(),
    phone: normalizedPhone,
    password,
  };
}

async function register(body) {
  const payload = validateRegisterPayload(body);

  const existingEmail = await userRepo.findByEmail(payload.email);
  const existingPhone = await userRepo.findByPhone(payload.phone);
  if (existingEmail || existingPhone) {
    throw new CustomError("User already exists", 400);
  }

  const user = {
    first_name: payload.first_name,
    last_name: payload.last_name,
    email: payload.email,
    phone: payload.phone,
    password: payload.password,
  };

  const createdUser = await userRepo.createUser(user);

  const token = signJwt({
    id: createdUser.id,
    email: createdUser.email,
    phone: createdUser.phone,
  });
  return { user: createdUser, token };
}

export default {
  register,
};
