# Buddy Hub - Client

Front-end for Buddy Hub, a team messaging app. Built with Vite, Tailwind CSS, and vanilla JS (ES modules).

## Setup

```bash
pnpm install
pnpm dev
```

Open the printed local URL. The dev server starts on the onboarding screen.

## Build

```bash
pnpm build
pnpm preview
```

## Project Structure

```
client/
├── index.html                 # Vite entry, redirects to onboarding
├── tailwind.config.js         # Design tokens (colors, fonts, radii, spacing)
├── postcss.config.js
├── vite.config.js             # Multi-page build entries
├── package.json
└── src/
    ├── styles/
    │   └── main.css           # Tailwind directives + custom component CSS
    ├── components/
    │   ├── Button/Button.js
    │   ├── Input/Input.js     # text/password fields, OTP group, strength meter
    │   ├── Avatar/Avatar.js
    │   ├── ChatItem/ChatItem.js
    │   └── MessageBubble/MessageBubble.js
    └── pages/
        ├── onboarding/        # index.html + main.js
        ├── login/
        ├── signup/
        ├── otp/
        ├── chats/
        └── conversation/
```

Each page has its markup (`index.html`) and its logic (`main.js`) separated.
