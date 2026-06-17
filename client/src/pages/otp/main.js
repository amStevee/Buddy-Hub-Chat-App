import "../../styles/main.css";
import { BuddyInput } from "../../components/Input/Input.js";

document.getElementById("otp-wrapper").innerHTML =
  BuddyInput.otpGroup("otp-group");

const phone = sessionStorage.getItem("pendingOtpPhone");
const phoneDisplay = document.getElementById("otp-phone-number");
const statusText = document.getElementById("status-text");

if (!phone) {
  window.location.href = "/src/pages/signup/index.html";
} else if (phoneDisplay) {
  phoneDisplay.textContent = phone;
}

function setStatus(message, type = "info") {
  statusText.textContent = message;
  statusText.className =
    type === "error"
      ? "text-sm text-red-600 mb-2"
      : "text-sm text-primary-600 mb-2 font-semibold";
}

async function verifyOtp(code) {
  setStatus("Verifying…", "info");

  try {
    const response = await fetch("/api/v1/auth/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, otp: code }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload?.error || payload?.message || "Invalid OTP");
    }

    localStorage.setItem("authToken", payload.token);
    setStatus("Verified successfully. Redirecting…", "success");
    setTimeout(() => {
      sessionStorage.removeItem("pendingOtpPhone");
      window.location.href = "/src/pages/chats/index.html";
    }, 800);
  } catch (error) {
    setStatus(error.message || "Unable to verify OTP", "error");
  }
}

BuddyInput.initOtpGroup("otp-group", verifyOtp);

async function resendOtp() {
  setStatus("Resending code…", "info");

  try {
    const response = await fetch("/api/v1/auth/resend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(
        payload?.error || payload?.message || "Unable to resend OTP",
      );
    }

    setStatus("OTP resent successfully.", "success");
  } catch (error) {
    setStatus(error.message || "Unable to resend OTP", "error");
  }
}

function startCountdown() {
  let secondsLeft = 30;
  const timerEl = document.getElementById("resend-timer");
  const actionBtn = document.getElementById("resend-action");

  timerEl.classList.remove("hidden");
  actionBtn.classList.add("hidden");
  timerEl.textContent = "Resend in 00:30";

  const interval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(interval);
      timerEl.classList.add("hidden");
      actionBtn.classList.remove("hidden");
    } else {
      const display = secondsLeft.toString().padStart(2, "0");
      timerEl.textContent = `Resend in 00:${display}`;
    }
  }, 1000);
}

startCountdown();

document.getElementById("resend-action").addEventListener("click", async () => {
  await resendOtp();
  startCountdown();
});
