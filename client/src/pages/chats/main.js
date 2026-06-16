import "../../styles/main.css";
import { BuddyAvatar } from "../../components/Avatar/Avatar.js";
import { BuddyChatItem } from "../../components/ChatItem/ChatItem.js";

// Profile avatars
document.getElementById("profile-avatar").innerHTML = BuddyAvatar.render(
  "JD",
  null,
  40,
  true,
);
document.getElementById("profile-avatar-mobile").innerHTML = BuddyAvatar.render(
  "JD",
  null,
  40,
  true,
);

// Search field
const searchHtml = `
  <div class="relative">
    <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
    </svg>
    <input type="text" placeholder="Search chats..." aria-label="Search chats"
      class="w-full h-[44px] pl-12 pr-4 bg-gray-100 rounded-2xl text-sm text-gray-900 placeholder-gray-400
        border-2 border-transparent focus:bg-white focus:border-primary-600 focus:outline-none transition" />
  </div>
`;
document.getElementById("search-wrapper").innerHTML = searchHtml;
document.getElementById("search-wrapper-mobile").innerHTML = searchHtml;

// Filter pills
const filters = ["All", "Unread", "Groups", "Archived"];
function renderFilterPills(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = filters
    .map(
      (f, i) =>
        `<button class="filter-pill ${i === 0 ? "active" : ""} focus-ring" data-filter="${f}">${f}</button>`,
    )
    .join("");

  container.querySelectorAll(".filter-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      container
        .querySelectorAll(".filter-pill")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}
renderFilterPills("filter-pills-desktop");
renderFilterPills("filter-pills-mobile");

let chats = [];

function renderChatList(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = chats
    .map((chat) => BuddyChatItem.render(chat))
    .join("");

  container.querySelectorAll("button").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const room = chats[i];
      window.location.href = `/src/pages/conversation/index.html?room=${room.id}`;
    });
  });
}

const token = localStorage.getItem("authToken");
if (!token) {
  window.location.href = "/src/pages/login/index.html";
}

async function loadRooms() {
  try {
    const res = await fetch("/api/v1/rooms", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to load rooms");
    const data = await res.json();
    chats = data.map((r) => ({
      initials: r.name.slice(0, 2).toUpperCase(),
      name: r.name,
      preview: "",
      time: new Date(r.created_at).toLocaleTimeString(),
      online: false,
      unread: 0,
      id: r.id,
    }));
    renderChatList("chat-list-desktop");
    renderChatList("chat-list-mobile");
  } catch (err) {
    console.error("loadRooms error", err);
  }
}

loadRooms();

// Socket.IO: allow creating new chat rooms
import { io } from "socket.io-client";
const socket = io("/", { auth: { token } });

async function createChatWith(otherUserId) {
  try {
    const meResp = await fetch("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!meResp.ok) throw new Error("Failed to fetch current user");
    const me = await meResp.json();

    socket.emit(
      "create_room",
      { participants: [me.id, otherUserId] },
      (err, res) => {
        if (err) return console.error(err);
        if (!res?.room?.id) return;

        const room = res.room;
        chats.unshift({
          initials: room.name.slice(0, 2).toUpperCase(),
          name: room.name,
          preview: "",
          time: "Now",
          online: false,
          unread: 0,
          id: room.id,
        });
        renderChatList("chat-list-desktop");
        renderChatList("chat-list-mobile");
        window.location.href = `/src/pages/conversation/index.html?room=${room.id}`;
      },
    );
  } catch (err) {
    console.error("createChatWith error", err);
  }
}

// Example: add button handler if present
const addBtn = document.getElementById("add-chat-btn");
if (addBtn) {
  addBtn.addEventListener("click", async () => {
    const other = prompt("Enter user id to chat with");
    if (other) await createChatWith(other.trim());
  });
}
