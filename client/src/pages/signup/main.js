import "../../styles/main.css";
import "../../utils/patchFetch.js";
import { BuddyButton } from "../../components/Button/Button.js";
import { BuddyInput } from "../../components/Input/Input.js";
import { isValidPhoneNumber } from "../../utils/phoneValidation.js";

document.getElementById("first-name-field").innerHTML = BuddyInput.text(
  "first-name",
  "First Name",
  "Jane",
);
document.getElementById("last-name-field").innerHTML = BuddyInput.text(
  "last-name",
  "Last Name",
  "Doe",
);
document.getElementById("email-field").innerHTML = BuddyInput.text(
  "email",
  "Email",
  "you@example.com",
  "email",
);
document.getElementById("phone-field").innerHTML = BuddyInput.text(
  "phone",
  "Phone Number",
  "08012345678",
  "tel",
);
document.getElementById("password-field").innerHTML = BuddyInput.password(
  "password",
  "Password",
);
document.getElementById("strength-meter-wrapper").innerHTML =
  BuddyInput.strengthMeter("strength-meter");
document.getElementById("submit-wrapper").innerHTML = BuddyButton.primary(
  "Create Account",
  "mt-2",
);

BuddyInput.bindPasswordToggle("password");

const submitBtn = document
  .getElementById("submit-wrapper")
  .querySelector("button");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const termsCheckbox = document.getElementById("terms-checkbox");

function validate() {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  const namesValid =
    firstName.value.trim().length > 0 && lastName.value.trim().length > 0;
  const phoneValid = isValidPhoneNumber(phone.value);
  const passwordValid = password.value.length >= 8;
  const termsAccepted = termsCheckbox.checked;

  const allValid =
    emailValid && namesValid && phoneValid && passwordValid && termsAccepted;
  submitBtn.disabled = !allValid;
}

// Initially disabled
submitBtn.disabled = true;

[firstName, lastName, email, phone, password].forEach((input) => {
  input.addEventListener("input", validate);
});
termsCheckbox.addEventListener("change", validate);

password.addEventListener("input", () => {
  BuddyInput.updateStrengthMeter("strength-meter", password.value);
});

const statusText = document.createElement("p");
statusText.id = "signup-status-text";
statusText.className = "text-sm text-red-600 mt-2";
document.getElementById("submit-wrapper").appendChild(statusText);

function setStatus(message, type = "error") {
  statusText.textContent = message;
  statusText.className =
    type === "success"
      ? "text-sm text-green-600 mt-2"
      : "text-sm text-red-600 mt-2";
}

async function registerUser() {
  if (!isValidPhoneNumber(phone.value)) {
    setStatus("Please enter a valid Nigerian phone number");
    return;
  }

  const body = {
    first_name: firstName.value.trim(),
    last_name: lastName.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    password: password.value,
  };

  try {
    const response = await fetch("/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(
        payload?.error || payload?.message || "Failed to send OTP",
      );
    }

    // sessionStorage.setItem("pendingOtpPhone", body.phone);
    localStorage.setItem("authToken", payload.token);
    setStatus("user registered successfully. Redirecting…", "success");
    window.location.href = "/src/pages/chats/index.html";
    // window.location.href = "/src/pages/otp/index.html";
  } catch (error) {
    setStatus(error.message || "Unable to send OTP");
  }
}

document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!submitBtn.disabled) {
    await registerUser();
  }
});
