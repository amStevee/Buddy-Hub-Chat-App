import "../../styles/main.css";
import { BuddyAvatar } from "../../components/Avatar/Avatar.js";
import { BuddyChatItem } from "../../components/ChatItem/ChatItem.js";
import { io } from "socket.io-client";
import utils from "../../utils/formatChatTime.js";
import { isValidPhoneNumber } from "../../utils/phoneValidation.js";

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
  modal.classList.add("flex");
});

document
  .getElementById("close-contact-modal")
  ?.addEventListener("click", () => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });

document
  .getElementById("search-contact-btn")
  ?.addEventListener("click", searchContact);

async function searchContact() {
  const query = document.getElementById("contact-search-input").value.trim();

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

async function searchChatList(query) {
  if (!query) return;

  try {
    const response = await fetch(`/api/v1/rooms?userId=${currentUser.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    const filteredData = data.filter((room) =>
      room.participants.some(
        (participant) =>
          participant.user.id !== currentUser.id &&
          participant.user.first_name
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    );

    chats = filteredData.map((room) => {
      const otherParticipant = room.participants.find(
        (p) => p.user.id !== currentUser.id,
      );
      const otherUser = otherParticipant ? otherParticipant.user : null;

      const lastMessage =
        room.messages && room.messages.length > 0
          ? room.messages[room.messages.length - 1]
          : null;

      return {
        initials: getInitials(otherUser),
        name: otherUser.first_name,
        preview: lastMessage ? lastMessage.text : "No message yet",
        time:
          lastMessage && lastMessage.created_at
            ? utils.formatChatTime(lastMessage.created_at)
            : "",
        online: false,
        unread: 0,
        id: room.id,
      };
    });

    renderChatList("chat-list-desktop");
    renderChatList("chat-list-mobile");
  } catch (error) {
    console.error("Search query Error: ", error);
  }
}

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedSearch = debounce(async (query) => {
  await searchChatList(query);
}, 250);

function initializeSearch() {
  const searchInput = document.querySelectorAll(
    "input[aria-label='Search chats']",
  );

  if (searchInput.length) {
    searchInput.forEach((input) => {
      input.addEventListener("input", () => {
        const trimmedValue = input.value.trim();
        debouncedSearch(trimmedValue);
      });
    });
  } else {
    console.error("Error: could not find an element with id='search-chat");
  }
}

/* =========================
   FILTER PILLS
========================= */

// const filters = ["All", "Unread", "Groups", "Archived"];
const filters = ["All"];

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

async function renderChatList(containerId) {
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
          ? room.messages[room.messages.length - 1]
          : null;

      return {
        initials: getInitials(otherUser),
        name: otherUser.first_name,
        preview: lastMessage ? lastMessage.text : "No message yet",
        time:
          lastMessage && lastMessage.created_at
            ? utils.formatChatTime(lastMessage.created_at)
            : "",
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
   SETTINGS MODAL
========================= */

function getCurrentUserName(user) {
  return [user?.first_name, user?.last_name].filter(Boolean).join(" ").trim();
}

function renderSettingsModal() {
  const modal = document.getElementById("settings-modal");
  if (!modal) return;

  modal.innerHTML = `
    <div class="bg-white w-full max-w-lg rounded-3xl p-6 shadow-xl">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-900">Settings</h2>
        <button id="close-settings-modal" class="text-gray-500">Close</button>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input id="settings-first-name" type="text" value="${currentUser?.first_name || ""}" class="w-full border rounded-xl px-4 py-3" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input id="settings-last-name" type="text" value="${currentUser?.last_name || ""}" class="w-full border rounded-xl px-4 py-3" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input id="settings-email" type="email" value="${currentUser?.email || ""}" class="w-full border rounded-xl px-4 py-3" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input id="settings-phone" type="tel" value="${currentUser?.phone || ""}" class="w-full border rounded-xl px-4 py-3" />
        </div>

        <p id="settings-status" class="text-sm min-h-5"></p>

        <div class="flex gap-3">
          <button id="save-settings-btn" class="flex-1 rounded-xl bg-primary-600 text-white px-4 py-3 font-semibold">Save Changes</button>
          <button id="logout-settings-btn" class="rounded-xl border border-gray-300 px-4 py-3 font-semibold text-gray-700">Log Out</button>
        </div>
      </div>
    </div>
  `;

  const closeBtn = document.getElementById("close-settings-modal");
  closeBtn?.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  document
    .getElementById("save-settings-btn")
    ?.addEventListener("click", saveSettings);
  document
    .getElementById("logout-settings-btn")
    ?.addEventListener("click", logoutUser);
}

async function saveSettings() {
  if (!currentUser) return;

  const firstName = document
    .getElementById("settings-first-name")
    ?.value.trim();
  const lastName = document.getElementById("settings-last-name")?.value.trim();
  const email = document.getElementById("settings-email")?.value.trim();
  const phone = document.getElementById("settings-phone")?.value.trim();
  const status = document.getElementById("settings-status");

  if (!firstName || !lastName || !email) {
    status.textContent = "Please fill in your name and email.";
    status.className = "text-sm text-red-600 min-h-5";
    return;
  }

  if (!isValidPhoneNumber(phone)) {
    status.textContent = "Please enter a valid Nigerian phone number.";
    status.className = "text-sm text-red-600 min-h-5";
    return;
  }

  try {
    const res = await fetch("/api/v1/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
      }),
    });

    const payload = await res.json();
    if (!res.ok) throw new Error(payload?.error || "Unable to update profile");

    currentUser = payload.user;
    renderProfileAvatar();
    status.textContent = "Profile updated successfully.";
    status.className = "text-sm text-green-600 min-h-5";
  } catch (error) {
    status.textContent = error.message;
    status.className = "text-sm text-red-600 min-h-5";
  }
}

function logoutUser() {
  localStorage.removeItem("authToken");
  window.location.href = "/src/pages/login/index.html";
}

function openSettingsModal() {
  renderSettingsModal();
  const modal = document.getElementById("settings-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

const settingsTrigger = document.getElementById("settings");
settingsTrigger?.addEventListener("click", (event) => {
  event.preventDefault();
  openSettingsModal();
});

const settingsModal = document.createElement("div");
settingsModal.id = "settings-modal";
settingsModal.className =
  "hidden fixed inset-0 bg-black/50 z-50 items-center justify-center";
settingsModal.innerHTML = "";
document.body.appendChild(settingsModal);

/* =========================
   INIT
========================= */

document.querySelectorAll('[data-view="contacts"]').forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    await loadRooms();
  });
});

(async function init() {
  await loadCurrentUser();
  await loadRooms();
  initializeSearch();
})();
