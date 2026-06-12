import { BuddyAvatar } from '../Avatar/Avatar.js';

/**
 * ChatItem component - used in chat list dashboard
 */
export const BuddyChatItem = {
  /**
   * @param {object} chat - {initials, imgSrc, name, preview, time, online, unread}
   */
  render(chat) {
    const avatar = BuddyAvatar.render(chat.initials, chat.imgSrc || null, 48, chat.online);
    const unreadBadge = chat.unread > 0
      ? `<span class="unread-badge" aria-label="${chat.unread} unread messages">${chat.unread > 99 ? '99+' : chat.unread}</span>`
      : '';

    return `
      <button class="w-full flex items-center gap-3 text-left hover:bg-gray-100 active:bg-gray-100 transition rounded-2xl focus-ring"
        style="height:72px;padding:14px 20px;">
        <div class="flex-shrink-0">${avatar}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2">
            <p class="font-semibold text-gray-900 truncate" style="font-size:14px;">${chat.name}</p>
            <span class="text-xs text-gray-400 flex-shrink-0">${chat.time}</span>
          </div>
          <p class="text-gray-400 truncate mt-0.5" style="font-size:12px;">${chat.preview}</p>
        </div>
        <div class="flex-shrink-0">${unreadBadge}</div>
      </button>
    `;
  },
};
