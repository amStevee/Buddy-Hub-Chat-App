import '../../styles/main.css';
import { BuddyButton } from '../../components/Button/Button.js';
import { BuddyInput } from '../../components/Input/Input.js';

document.getElementById('email-field').innerHTML = BuddyInput.text('email', 'Email', 'you@example.com', 'email');
document.getElementById('password-field').innerHTML = BuddyInput.password('password', 'Password');
document.getElementById('submit-wrapper').innerHTML = BuddyButton.primary('Sign In', 'mt-2');

BuddyInput.bindPasswordToggle('password');

document.getElementById('signin-form').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = '/src/pages/chats/index.html';
});
