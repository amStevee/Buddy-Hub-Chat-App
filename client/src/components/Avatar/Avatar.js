/**
 * Avatar component
 */
export const BuddyAvatar = {
  /**
   * @param {string} initials - fallback initials text
   * @param {string|null} imgSrc - optional image url
   * @param {number} size - px size
   * @param {boolean} online - show presence badge
   */
  render(initials, imgSrc = null, size = 48, online = false) {
    const inner = imgSrc
      ? `<img src="${imgSrc}" alt="" class="w-full h-full object-cover rounded-full" />`
      : `<span class="font-heading font-semibold text-primary-700">${initials}</span>`;

    const badge = online
      ? `<span class="presence-badge absolute bottom-0 right-0" aria-label="Online"></span>`
      : "";

    return `
      <div class="relative" style="width:${size}px;height:${size}px;">
        <div class="w-full h-full rounded-full bg-primary-500/10 flex items-center justify-center overflow-hidden">
          ${inner}
        </div>
        ${badge}
      </div>
    `;
  },
};
