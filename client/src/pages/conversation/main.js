import "../../styles/main.css";
import { BuddyAvatar } from "../../components/Avatar/Avatar.js";
import { BuddyMessageBubble } from "../../components/MessageBubble/MessageBubble.js";
import { io } from "socket.io-client";

let currentUser = null;
let otherUser = null;

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

const socket = io("/", { auth: { token } });

/* =========================
   LOAD CURRENT USER
========================= */
async function loadCurrentUser() {
  try {
    const res = await fetch("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to load user");
    const user = await res.json();
    currentUser = user;
  } catch (err) {
    console.error("loadCurrentUser error", err);
  }
}

async function loadOtherUser(roomId) {
  const res = await fetch(`/api/v1/rooms/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const room = await res.json();

  otherUser = room.participants.find((p) => p.user.id !== currentUser.id)?.user;
}

/* =========================
   AVATAR HELPERS
========================= */

function getInitials(user) {
  const name =
    user?.full_name ||
    user?.fullName ||
    user?.username ||
    user?.name ||
    `${user.first_name} ${user.last_name}` ||
    "Unknown User";

  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function renderProfileAvatar() {
  if (!otherUser) return;

  const initials = getInitials(otherUser);

  const srcImg =
    otherUser.avatar_url ||
    otherUser.profile_image ||
    otherUser.avatar ||
    otherUser.image ||
    null;

  const avatarHtml = BuddyAvatar.render(initials, srcImg, 40, socket.connected);

  document.getElementById("header-avatar").innerHTML = avatarHtml;

  document.getElementById("receiver-name").innerHTML = otherUser?.first_name;
}

/* =========================
   SET RECEIVER-NAME AND RECEIVER-ONLINE
========================= */

/* =========================
   RENDER MESSAGES
========================= */
function renderMessages() {
  messageList.innerHTML = messages
    .map((m) => BuddyMessageBubble.render(m.text, m.time, m.outgoing))
    .join("");
  messageList.scrollTop = messageList.scrollHeight;
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
        hour12: true,
      });
      messages.push({
        text: payload.text,
        time,
        outgoing: payload.sender_id === currentUser.id,
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

const optionsButton = document.getElementById("conversation-options-btn");
optionsButton?.addEventListener("click", async () => {
  const confirmed = window.confirm(
    "Remove this contact from your chat list? You will still be able to access the conversation until you leave it too.",
  );
  if (!confirmed) return;

  try {
    const res = await fetch(`/api/v1/rooms/${roomId}/leave`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const payload = await res.json();
      throw new Error(payload?.error || "Unable to remove contact");
    }

    window.location.href = "/src/pages/chats/index.html";
  } catch (err) {
    console.error("leaveRoom error", err);
    alert(err.message || "Unable to remove contact.");
  }
});

socket.on("message", (payload) => {
  const now = new Date(payload.created_at);
  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const outgoing = payload.sender_id === currentUser.id;
  messages.push({ text: payload.text, time, outgoing });
  renderMessages();
});

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

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
  await loadOtherUser(roomId);
  renderProfileAvatar();
  await loadRoomMessages();
})();
