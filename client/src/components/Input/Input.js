/**
 * Input components
 */
export const BuddyInput = {
  text(id, label, placeholder, type = 'text', extraClasses = '') {
    return `
      <div class="${extraClasses}">
        <label for="${id}" class="block text-sm font-semibold text-gray-900 mb-2">${label}</label>
        <input
          id="${id}"
          type="${type}"
          placeholder="${placeholder}"
          class="w-full h-[52px] px-4 bg-gray-100 rounded-2xl text-base text-gray-900 placeholder-gray-400
            border-2 border-transparent focus:bg-white focus:border-primary-600 focus:outline-none transition"
        />
      </div>
    `;
  },

  password(id, label, extraClasses = '') {
    return `
      <div class="${extraClasses}">
        <label for="${id}" class="block text-sm font-semibold text-gray-900 mb-2">${label}</label>
        <div class="relative">
          <input
            id="${id}"
            type="password"
            placeholder="Enter your password"
            class="w-full h-[52px] px-4 pr-14 bg-gray-100 rounded-2xl text-base text-gray-900 placeholder-gray-400
              border-2 border-transparent focus:bg-white focus:border-primary-600 focus:outline-none transition"
          />
          <button
            type="button"
            aria-label="Toggle password visibility"
            data-toggle-password="${id}"
            class="absolute right-1 top-1/2 -translate-y-1/2 w-[44px] h-[44px] flex items-center justify-center
              rounded-full hover:bg-gray-200 transition focus-ring"
          >
            <svg class="eye-open w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <svg class="eye-closed w-5 h-5 text-gray-400 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  },

  /**
   * Attach click handler for password visibility toggle.
   * Call after the password() HTML has been inserted into the DOM.
   */
  bindPasswordToggle(id) {
    const btn = document.querySelector(`[data-toggle-password="${id}"]`);
    if (!btn) return;
    const input = document.getElementById(id);
    const eyeOpen = btn.querySelector('.eye-open');
    const eyeClosed = btn.querySelector('.eye-closed');

    btn.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        eyeOpen.classList.add('hidden');
        eyeClosed.classList.remove('hidden');
      } else {
        input.type = 'password';
        eyeOpen.classList.remove('hidden');
        eyeClosed.classList.add('hidden');
      }
    });
  },

  /**
   * Render 6 OTP boxes with full keyboard + paste support
   */
  otpGroup(containerId = 'otp-group') {
    let boxes = '';
    for (let i = 0; i < 6; i++) {
      boxes += `
        <input
          type="text"
          inputmode="numeric"
          maxlength="1"
          aria-label="Digit ${i + 1} of 6"
          class="otp-box focus:ring-0"
          data-index="${i}"
        />
      `;
    }
    return `<div id="${containerId}" class="flex gap-2">${boxes}</div>`;
  },

  initOtpGroup(containerId, onComplete) {
    const container = document.getElementById(containerId);
    const inputs = [...container.querySelectorAll('.otp-box')];

    inputs[0].focus();

    inputs.forEach((input, idx) => {
      input.addEventListener('input', (e) => {
        const val = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = val;
        if (val && idx < inputs.length - 1) {
          inputs[idx + 1].focus();
        }
        checkComplete();
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '' && idx > 0) {
            inputs[idx - 1].focus();
            inputs[idx - 1].value = '';
            e.preventDefault();
          } else {
            input.value = '';
          }
        }
      });

      input.addEventListener('paste', (e) => {
        e.preventDefault();
        const paste = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9]/g, '');
        if (paste.length === 0) return;
        const digits = paste.slice(0, 6).split('');
        digits.forEach((d, i) => {
          if (inputs[i]) inputs[i].value = d;
        });
        const lastFilled = Math.min(digits.length, inputs.length) - 1;
        if (lastFilled >= 0) inputs[lastFilled].focus();
        checkComplete();
      });
    });

    function checkComplete() {
      const code = inputs.map((i) => i.value).join('');
      if (code.length === 6 && !inputs.some((i) => i.value === '')) {
        onComplete(code);
      }
    }
  },

  /**
   * Live password strength meter (4 segments)
   */
  strengthMeter(containerId = 'strength-meter') {
    return `
      <div id="${containerId}" class="flex gap-1.5 mt-2" role="status" aria-live="polite">
        <div class="strength-segment"></div>
        <div class="strength-segment"></div>
        <div class="strength-segment"></div>
        <div class="strength-segment"></div>
      </div>
      <p id="${containerId}-label" class="text-xs text-gray-400 mt-1"></p>
    `;
  },

  evaluateStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score; // 0-4
  },

  updateStrengthMeter(containerId, password) {
    const container = document.getElementById(containerId);
    const label = document.getElementById(`${containerId}-label`);
    const segments = [...container.querySelectorAll('.strength-segment')];
    const score = BuddyInput.evaluateStrength(password);

    segments.forEach((seg) => {
      seg.className = 'strength-segment';
    });

    if (password.length === 0) {
      label.textContent = '';
      return;
    }

    let fillClass = 'filled-weak';
    let text = 'Weak';
    if (score >= 4) {
      fillClass = 'filled-strong';
      text = 'Strong';
    } else if (score >= 2) {
      fillClass = 'filled-medium';
      text = 'Medium';
    }

    const filledCount = score === 0 ? 1 : score;
    for (let i = 0; i < Math.min(filledCount, 4); i++) {
      segments[i].classList.add(fillClass);
    }
    label.textContent = text;
  },
};
