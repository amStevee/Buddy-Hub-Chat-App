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

  const digits = trimmedPhone.replace(/\D/g, "");

  if (/^234\d{10}$/.test(digits)) return `+${digits}`;
  if (/^0\d{10}$/.test(digits)) return `+234${digits.slice(1)}`;

  return null;
}

export { checkUserRequestBody, validatePhoneNumber };
