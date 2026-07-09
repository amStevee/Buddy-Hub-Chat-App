function checkUserRequestBody(reqBody) {
  if (
    !reqBody ||
    typeof reqBody !== "object" ||
    Array.isArray(reqBody) ||
    Object.keys(reqBody).length === 0
  ) {
    const error = new Error("Invalid or missing user data in request body");
    error.statusCode = 400;
    throw error;
  }
  return reqBody;
}

function validatePhoneNumber(phone) {
  if (!phone || typeof phone !== "string") return null;

  const trimmedPhone = phone.trim();
  if (!trimmedPhone) return null;

  // Ensure it only contains valid phone characters
  if (!/^[0-9+\s()-]+$/.test(trimmedPhone)) return null;

  // Strip all non-digits
  const digits = trimmedPhone.replace(/\D/g, "");

  // Scenario 1: International format (e.g., 2348031234567 -> 13 digits)
  if (digits.length === 13 && /^234\d{10}$/.test(digits)) {
    return `+${digits}`;
  }

  // Scenario 2: Local format (e.g., 08031234567 -> 11 digits)
  if (digits.length === 11 && /^0\d{10}$/.test(digits)) {
    return `+234${digits.slice(1)}`;
  }

  // If it doesn't match either valid layout
  return null;
}

export { checkUserRequestBody, validatePhoneNumber };
