import '../../styles/main.css';
import { BuddyInput } from '../../components/Input/Input.js';

document.getElementById('otp-wrapper').innerHTML = BuddyInput.otpGroup('otp-group');

BuddyInput.initOtpGroup('otp-group', () => {
  const statusText = document.getElementById('status-text');
  statusText.textContent = 'Verifying...';
  statusText.classList.add('text-primary-600', 'font-semibold');
  setTimeout(() => {
    window.location.href = '/src/pages/chats/index.html';
  }, 800);
});

// 30-second countdown
function startCountdown() {
  let secondsLeft = 30;
  const timerEl = document.getElementById('resend-timer');
  const actionBtn = document.getElementById('resend-action');

  timerEl.classList.remove('hidden');
  actionBtn.classList.add('hidden');
  timerEl.textContent = 'Resend in 00:30';

  const interval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(interval);
      timerEl.classList.add('hidden');
      actionBtn.classList.remove('hidden');
    } else {
      const display = secondsLeft.toString().padStart(2, '0');
      timerEl.textContent = `Resend in 00:${display}`;
    }
  }, 1000);
}

startCountdown();

document.getElementById('resend-action').addEventListener('click', startCountdown);
