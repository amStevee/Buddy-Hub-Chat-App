import userRepo from "../Users/users.repository.js";
import { CustomError } from "../../core/ErrorHandler.js";
import OtpService from "../../core/otp/OtpService.js";
import { signJwt } from "../../core/jwt.js";

const OTP_TTL_MS = 5 * 60 * 1000;
const otpStore = new Map();

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function standardizePhone(phone) {
  return phone.trim();
}

async function sendOtp(phone, otp) {
  await OtpService.sendOtp(phone, otp);
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

  return {
    first_name: first_name.trim(),
    last_name: last_name.trim(),
    email: email.trim(),
    phone: standardizePhone(phone),
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

  const pending = otpStore.get(payload.phone);
  const otp = generateOtp();
  const expiresAt = Date.now() + OTP_TTL_MS;

  otpStore.set(payload.phone, {
    data: payload,
    otp,
    expiresAt,
  });

  sendOtp(payload.phone, otp);

  return {
    message: "OTP sent to phone number",
    phone: payload.phone,
  };
}

async function verify(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new CustomError("Invalid request body", 400);
  }

  const { phone, otp } = body;
  if (!phone?.trim() || !otp?.trim()) {
    throw new CustomError("Phone and OTP are required", 400);
  }

  const record = otpStore.get(standardizePhone(phone));
  if (!record) {
    throw new CustomError(
      "No pending OTP request found. Please register again.",
      400,
    );
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(record.data.phone);
    throw new CustomError("OTP has expired. Please request a new code.", 400);
  }

  if (record.otp !== otp.trim()) {
    throw new CustomError("Invalid OTP code", 400);
  }

  const user = await userRepo.createUser(record.data);
  otpStore.delete(record.data.phone);

  const token = signJwt({ id: user.id, email: user.email, phone: user.phone });
  return { user, token };
}

async function resend(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new CustomError("Invalid request body", 400);
  }

  const { phone } = body;
  if (!phone?.trim()) {
    throw new CustomError("Phone is required to resend OTP", 400);
  }

  const record = otpStore.get(standardizePhone(phone));
  if (!record) {
    throw new CustomError(
      "No pending OTP request found. Please register again.",
      400,
    );
  }

  const otp = generateOtp();
  record.otp = otp;
  record.expiresAt = Date.now() + OTP_TTL_MS;
  otpStore.set(record.data.phone, record);

  sendOtp(record.data.phone, otp);

  return {
    message: "OTP resent to phone number",
    phone: record.data.phone,
  };
}

export default {
  register,
  verify,
  resend,
};
