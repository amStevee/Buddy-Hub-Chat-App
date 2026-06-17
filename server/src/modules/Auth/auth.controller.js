import authService from "./auth.service.js";
import authLoginService from "./auth.login.service.js";

async function register(req, res) {
  try {
    const result = await authService.register(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

async function verify(req, res) {
  try {
    const result = await authService.verify(req.body);
    res.status(201).json({
      message: "Account verified successfully",
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

async function resend(req, res) {
  try {
    const result = await authService.resend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const result = await authLoginService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

async function me(req, res) {
  try {
    const user = await authLoginService.me(req.user.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default {
  register,
  verify,
  resend,
  login,
  me,
};
