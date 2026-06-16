import "../../styles/main.css";
import { BuddyAvatar } from "../../components/Avatar/Avatar.js";
import { BuddyMessageBubble } from "../../components/MessageBubble/MessageBubble.js";
import { io } from "socket.io-client";

document.getElementById("header-avatar").innerHTML = BuddyAvatar.render(
  "OM",
  null,
  40,
  true,
);

const messages = [];
const messageList = document.getElementById("message-list");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

const token = localStorage.getItem("authToken");
if (!token) {
  window.location.href = "/src/pages/login/index.html";
}

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("room");
if (!roomId) {
  window.location.href = "/src/pages/chats/index.html";
}

let currentUserId = null;
const socket = io("/", { auth: { token } });

function renderMessages() {
  messageList.innerHTML = messages
    .map((m) => BuddyMessageBubble.render(m.text, m.time, m.outgoing))
    .join("");
  messageList.scrollTop = messageList.scrollHeight;
}

async function loadCurrentUser() {
  try {
    const res = await fetch("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to load user");
    const user = await res.json();
    currentUserId = user.id;
  } catch (err) {
    console.error("loadCurrentUser error", err);
  }
}

async function loadRoomMessages() {
  try {
    const res = await fetch(`/api/v1/rooms/${roomId}/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Unable to load messages");
    const data = await res.json();
    messages.length = 0;
    data.forEach((payload) => {
      const now = new Date(payload.created_at);
      const time = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
      messages.push({
        text: payload.text,
        time,
        outgoing: payload.sender_id === currentUserId,
      });
    });
    renderMessages();
  } catch (err) {
    console.error("loadRoomMessages error", err);
  }
}

socket.on("connect", () => {
  socket.emit("join", { room: roomId });
});

socket.on("connect_error", (err) => {
  console.error("Socket connect error", err.message);
});

socket.on("message", (payload) => {
  const now = new Date(payload.created_at);
  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  const outgoing = payload.sender_id === currentUserId;
  messages.push({ text: payload.text, time, outgoing });
  renderMessages();
});

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  messages.push({ text, time, outgoing: true });
  renderMessages();
  input.value = "";

  socket.emit("message", { roomId, text }, (err) => {
    if (err) {
      console.error("message error", err);
    }
  });
}

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

(async function initialize() {
  await loadCurrentUser();
  await loadRoomMessages();
})();
