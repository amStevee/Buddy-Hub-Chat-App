import '../../styles/main.css';
import { BuddyButton } from '../../components/Button/Button.js';

document.getElementById('cta-wrapper').innerHTML = BuddyButton.primary('Get Started');

const slides = [
  {
    title: 'Chat freely with your team',
    desc: 'Send messages and emojis instantly. Simple, friendly, and fast — just like talking to a friend.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 21l1.395-3.72C3.512 16.107 3 14.605 3 13c0-4.418 4.03-8 9-8s9 3.582 9 8z" />`,
  },
  {
    title: 'Stay organized, stay productive',
    desc: 'Group conversations, search, and filters keep your team in sync without the noise.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />`,
  },
  {
    title: 'A polished feel, built for you',
    desc: 'Beautiful design, smooth interactions, and a friendly experience from the very first tap.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />`,
  },
];

let current = 0;
const titleEl = document.getElementById('slide-title');
const descEl = document.getElementById('slide-desc');
const iconWrapper = document.querySelector('#slide-illustration svg');
const dots = document.querySelectorAll('[data-dot]');
const ctaWrapper = document.getElementById('cta-wrapper');

function renderSlide(index) {
  titleEl.textContent = slides[index].title;
  descEl.textContent = slides[index].desc;
  iconWrapper.innerHTML = slides[index].icon;

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.className = 'dot-active';
      dot.setAttribute('aria-selected', 'true');
    } else {
      dot.className = 'dot-inactive';
      dot.setAttribute('aria-selected', 'false');
    }
  });

  const btnLabel = index === slides.length - 1 ? 'Get Started' : 'Next';
  ctaWrapper.innerHTML = BuddyButton.primary(btnLabel);
  ctaWrapper.querySelector('button').addEventListener('click', () => {
    if (index === slides.length - 1) {
      window.location.href = '/src/pages/signup/index.html';
    } else {
      current = index + 1;
      renderSlide(current);
    }
  });
}

renderSlide(current);
