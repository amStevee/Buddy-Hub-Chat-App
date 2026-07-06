export function normalizePhoneNumber(phone) {
  if (!phone || typeof phone !== "string") return null;

  const trimmedPhone = phone.trim();
  if (!trimmedPhone) return null;

  const digits = trimmedPhone.replace(/\D/g, "");

  if (digits.length !== 11) return null;

  if (/^234\d{10}$/.test(digits)) return `+${digits}`;
  if (/^0\d{10}$/.test(digits)) return `+234${digits.slice(1)}`;

  return null;
}

export function isValidPhoneNumber(phone) {
  return normalizePhoneNumber(phone) !== null;
}
