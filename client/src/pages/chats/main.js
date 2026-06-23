import "../../styles/main.css";
import { BuddyAvatar } from "../../components/Avatar/Avatar.js";
import { BuddyChatItem } from "../../components/ChatItem/ChatItem.js";
import { io } from "socket.io-client";

/* =========================
   AUTH + GLOBAL STATE
========================= */

const token = localStorage.getItem("authToken");

if (!token) {
  window.location.href = "/src/pages/login/index.html";
}

let currentUser = null;
let chats = [];

const socket = io("/", { auth: { token } });

/* =========================
   AVATAR HELPERS
========================= */

function getInitials(user) {
  const name =
    user?.full_name ||
    user?.fullName ||
    user?.username ||
    user?.name ||
    `${user?.first_name} ${user?.last_name}` ||
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
  if (!currentUser) return;

  const initials = getInitials(currentUser);

  const srcImg =
    currentUser.avatar_url ||
    currentUser.profile_image ||
    currentUser.avatar ||
    currentUser.image ||
    null;

  const avatarHtml = BuddyAvatar.render(initials, srcImg, 40, socket.connected);

  document.getElementById("profile-avatar").innerHTML = avatarHtml;
  document.getElementById("profile-avatar-mobile").innerHTML = avatarHtml;
}

/* =========================
   LOAD CURRENT USER
========================= */

async function loadCurrentUser() {
  try {
    const res = await fetch("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Failed to load current user");

    currentUser = await res.json();

    renderProfileAvatar();
  } catch (err) {
    console.error("loadCurrentUser error", err);
  }
}

/* =========================
   CONTACT SEARCH
========================= */

const modal = document.getElementById("contact-modal");

document.getElementById("add-contact-btn")?.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

document
  .getElementById("close-contact-modal")
  ?.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

document
  .getElementById("search-contact-btn")
  ?.addEventListener("click", searchContact);

async function searchContact() {
  const query = document.getElementById("contact-search-input").value.trim();

  if (!query) return;

  try {
    const res = await fetch(
      `/api/v1/users/search?q=${encodeURIComponent(query)}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const data = await res.json();

    const resultContainer = document.getElementById("contact-search-result");

    if (!data.user) {
      resultContainer.innerHTML = `<p class="text-red-500">User not found</p>`;
      return;
    }

    resultContainer.innerHTML = `
      <div class="border rounded-2xl p-4">
        <div class="font-semibold">${data.user[0].first_name}</div>
        <div class="text-sm text-gray-500">
          ${data.user[0].email || data.user[0].phone}
        </div>

        <button
          id="add-found-contact"
          class="mt-3 px-4 py-2 bg-primary-600 text-white rounded-xl"
        >
          Add Contact
        </button>
      </div>
    `;

    document
      .getElementById("add-found-contact")
      ?.addEventListener("click", () => createChatWith(data.user[0].id));
  } catch (err) {
    console.error(err);
  }
}

/* =========================
   SEARCH UI
========================= */

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

/* =========================
   FILTER PILLS
========================= */

const filters = ["All", "Unread", "Groups", "Archived"];

function renderFilterPills(containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = filters
    .map(
      (f, i) =>
        `<button class="filter-pill ${
          i === 0 ? "active" : ""
        } focus-ring" data-filter="${f}">${f}</button>`,
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

/* =========================
   ROOMS / CHATS
========================= */

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

async function loadRooms() {
  try {
    const res = await fetch(`/api/v1/rooms?userId=${currentUser.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Failed to load rooms");

    const data = await res.json();

    chats = data.map((room) => {
      const otherParticipant = room.participants.find(
        (p) => p.user.id !== currentUser.id,
      );
      const otherUser = otherParticipant ? otherParticipant.user : null;

      const lastMessage =
        room.messages && room.messages.length > 0
          ? room.messages[room.messages.length - 1].text
          : "No message yet";

      return {
        initials: getInitials(otherUser),
        name: otherUser.first_name,
        preview: lastMessage,
        time: lastMessage.created_at
          ? new Date(lastMessage.created_at).toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            })
          : new Date().toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            }),
        online: false,
        unread: 0,
        id: room.id,
      };
    });

    renderChatList("chat-list-desktop");
    renderChatList("chat-list-mobile");
  } catch (err) {
    console.error("loadRooms error", err);
  }
}

/* =========================
   CREATE CHAT (SOCKET)
========================= */

async function createChatWith(otherUserId) {
  try {
    if (!currentUser) await loadCurrentUser();

    socket.emit(
      "create_room",
      {
        participants: [currentUser.id, otherUserId],
      },
      (err, res) => {
        if (err) return console.error(err);
        if (!res?.room?.id) return;

        const room = res.room;

        console.log({ SOCcreateROOM: room });

        const getOtherUser = room.participants.find(
          (p) => p.user.id !== currentUser.id,
        )?.user;

        chats.unshift({
          initials: room.name.slice(0, 2).toUpperCase(),
          name: getInitials(getOtherUser),
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

/* =========================
   INIT
========================= */

document.querySelectorAll('[data-view="contacts"]').forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    await loadContacts();
    renderContacts();
  });
});

// const addBtn = document.getElementById("add-chat-btn");
// addBtn?.addEventListener("click", async () => {
//   const other = prompt("Enter user id to chat with");
//   if (other) await createChatWith(other.trim());
// });

(async function init() {
  await loadCurrentUser();
  await loadRooms();
})();
