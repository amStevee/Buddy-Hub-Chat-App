import "../../styles/main.css";
import { BuddyButton } from "../../components/Button/Button.js";
import { BuddyInput } from "../../components/Input/Input.js";

document.getElementById("email-field").innerHTML = BuddyInput.text(
  "email",
  "Email",
  "you@example.com",
  "email",
);
document.getElementById("password-field").innerHTML = BuddyInput.password(
  "password",
  "Password",
);
document.getElementById("submit-wrapper").innerHTML = BuddyButton.primary(
  "Sign In",
  "mt-2",
);

BuddyInput.bindPasswordToggle("password");

const statusText = document.createElement("p");
statusText.id = "login-status-text";
statusText.className = "text-sm text-red-600 mt-2";
document.getElementById("submit-wrapper").appendChild(statusText);

function setStatus(message, type = "error") {
  statusText.textContent = message;
  statusText.className =
    type === "success"
      ? "text-sm text-green-600 mt-2"
      : "text-sm text-red-600 mt-2";
}

async function loginUser() {
  setStatus("Signing in…", "success");

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload?.error || payload?.message || "Login failed");
    }

    localStorage.setItem("authToken", payload.token);
    window.location.href = "/src/pages/chats/index.html";
  } catch (error) {
    setStatus(error.message || "Unable to sign in");
  }
}

document.getElementById("signin-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  await loginUser();
});
