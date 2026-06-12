import '../../styles/main.css';
import { BuddyButton } from '../../components/Button/Button.js';
import { BuddyInput } from '../../components/Input/Input.js';

document.getElementById('first-name-field').innerHTML = BuddyInput.text('first-name', 'First Name', 'Jane');
document.getElementById('last-name-field').innerHTML = BuddyInput.text('last-name', 'Last Name', 'Doe');
document.getElementById('email-field').innerHTML = BuddyInput.text('email', 'Email', 'you@example.com', 'email');
document.getElementById('password-field').innerHTML = BuddyInput.password('password', 'Password');
document.getElementById('strength-meter-wrapper').innerHTML = BuddyInput.strengthMeter('strength-meter');
document.getElementById('submit-wrapper').innerHTML = BuddyButton.primary('Create Account', 'mt-2');

BuddyInput.bindPasswordToggle('password');

const submitBtn = document.getElementById('submit-wrapper').querySelector('button');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const termsCheckbox = document.getElementById('terms-checkbox');

function validate() {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  const namesValid = firstName.value.trim().length > 0 && lastName.value.trim().length > 0;
  const passwordValid = password.value.length >= 8;
  const termsAccepted = termsCheckbox.checked;

  const allValid = emailValid && namesValid && passwordValid && termsAccepted;
  submitBtn.disabled = !allValid;
}

// Initially disabled
submitBtn.disabled = true;

[firstName, lastName, email, password].forEach((input) => {
  input.addEventListener('input', validate);
});
termsCheckbox.addEventListener('change', validate);

password.addEventListener('input', () => {
  BuddyInput.updateStrengthMeter('strength-meter', password.value);
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!submitBtn.disabled) {
    window.location.href = '/src/pages/otp/index.html';
  }
});
