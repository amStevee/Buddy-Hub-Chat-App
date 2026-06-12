/**
 * Button component
 */
export const BuddyButton = {
  primary(label, extraClasses = '') {
    return `
      <button class="w-full h-[52px] bg-primary-600 text-white font-heading font-semibold text-base rounded-2xl
        hover:bg-primary-700 active:bg-primary-800 transition disabled:opacity-50 disabled:cursor-not-allowed
        focus-ring ${extraClasses}">
        ${label}
      </button>
    `;
  },

  secondaryLink(label, extraClasses = '') {
    return `
      <button class="text-primary-600 font-semibold text-sm hover:text-primary-700 transition focus-ring rounded ${extraClasses}">
        ${label}
      </button>
    `;
  },

  iconButton(svgInner, ariaLabel, extraClasses = '') {
    return `
      <button aria-label="${ariaLabel}" class="min-w-[44px] min-h-[44px] flex items-center justify-center
        rounded-full hover:bg-gray-100 active:bg-gray-200 transition focus-ring ${extraClasses}">
        ${svgInner}
      </button>
    `;
  },
};
