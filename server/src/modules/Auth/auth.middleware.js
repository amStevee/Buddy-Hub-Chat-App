import { verifyJwt } from "../../core/jwt.js";
import { CustomError } from "../../core/ErrorHandler.js";

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError("Authorization header missing or malformed", 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = verifyJwt(token);
    req.user = payload;
    next();
  } catch (error) {
    throw new CustomError("Invalid or expired token", 401);
  }
}

export { requireAuth };
