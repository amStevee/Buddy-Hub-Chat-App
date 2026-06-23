const otpStore = new Map();

export function saveOtp(phone, otp) {
  otpStore.set(phone, {
    otp,
    createdAt: Date.now(),
  });
}

export function getOtp(phone) {
  return otpStore.get(phone);
}

export function removeOtp(phone) {
  otpStore.delete(phone);
}