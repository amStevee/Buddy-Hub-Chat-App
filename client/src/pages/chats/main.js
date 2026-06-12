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

// Chat data
const chats = [
  {
    initials: "SM",
    name: "Orochimaru Martinez",
    preview: "Cool",
    time: "2:45 PM",
    online: true,
    unread: 3,
  },
  {
    initials: "PT",
    name: "Itachi Uchiha",
    preview: "Alex: Any updates?",
    time: "1:30 PM",
    online: false,
    unread: 12,
  },
  {
    initials: "JK",
    name: "Hashirama Senju",
    preview: "Thanks for the help today 🙏",
    time: "11:02 AM",
    online: true,
    unread: 0,
  },
  {
    initials: "DG",
    name: "Madara Uchiha",
    preview: "You: a world full of vectors..",
    time: "Yesterday",
    online: false,
    unread: 0,
  },
  {
    initials: "EL",
    name: "Kakashi Hatake",
    preview: "Can we push the meeting to 3?",
    time: "Yesterday",
    online: true,
    unread: 1,
  },
  {
    initials: "EW",
    name: "Obito Uchiha",
    preview: "Reminder: lost",
    time: "Mon",
    online: false,
    unread: 0,
  },
];

function renderChatList(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = chats
    .map((chat) => BuddyChatItem.render(chat))
    .join("");

  container.querySelectorAll("button").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      window.location.href = `/src/pages/conversation/index.html?chat=${i}`;
    });
  });
}
renderChatList("chat-list-desktop");
renderChatList("chat-list-mobile");
