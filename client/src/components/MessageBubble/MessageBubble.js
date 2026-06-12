/**
 * MessageBubble component
 */
export const BuddyMessageBubble = {
  /**
   * @param {string} text
   * @param {string} time
   * @param {boolean} outgoing
   */
  render(text, time, outgoing = false) {
    if (outgoing) {
      return `
        <div class="flex justify-end">
          <div class="bubble-outgoing bg-primary-600 text-white rounded-3xl px-4 py-3 max-w-[75%]">
            <p class="text-sm">${text}</p>
            <span class="block text-right text-[11px] text-white/70 mt-1">${time}</span>
          </div>
        </div>
      `;
    }
    return `
      <div class="flex justify-start">
        <div class="bubble-incoming bg-white text-gray-900 rounded-3xl px-4 py-3 max-w-[75%] shadow-sm">
          <p class="text-sm">${text}</p>
          <span class="block text-right text-[11px] text-gray-400 mt-1">${time}</span>
        </div>
      </div>
    `;
  },
};
