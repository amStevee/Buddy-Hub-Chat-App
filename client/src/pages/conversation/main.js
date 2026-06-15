import "../../styles/main.css";
import { BuddyAvatar } from "../../components/Avatar/Avatar.js";
import { BuddyMessageBubble } from "../../components/MessageBubble/MessageBubble.js";

// 

document.getElementById("header-avatar").innerHTML = BuddyAvatar.render(
  "OM",
  null,
  40,
  true,
);

const messages = [
  { text: "Hey!", time: "2:30 PM", outgoing: false },
  { text: "🙂", time: "2:32 PM", outgoing: true },
  { text: "Hi", time: "2:33 PM", outgoing: false },
  { text: "Hello", time: "2:45 PM", outgoing: true },
];

const messageList = document.getElementById("message-list");

function renderMessages() {
  messageList.innerHTML = messages
    .map((m) => BuddyMessageBubble.render(m.text, m.time, m.outgoing))
    .join("");
  messageList.scrollTop = messageList.scrollHeight;
}
renderMessages();

const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  // todo: this should push to backend
  messages.push({ text, time, outgoing: true });
  renderMessages();
  input.value = "";
}

// Send message
sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
