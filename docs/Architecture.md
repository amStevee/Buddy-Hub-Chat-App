# Architecture

## High-level structure

```text
buddy-hub-chat-app/
├── client/                  # Vite frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Login, signup, chats, conversation, onboarding, OTP screens
│       ├── styles/          # Global CSS
│       └── utils/           # Helpers such as phone validation and time formatting
│
├── server/                  # Express + Prisma backend
│   ├── prisma/              # Prisma schema and seed data
│   └── src/
│       ├── api/             # Versioned REST routes
│       ├── core/            # JWT, Prisma client, error handling, utilities
│       ├── modules/         # Auth, Rooms, Users modules
│       ├── sockets/         # Socket.io event handlers
│       └── test/            # Jest tests
│
├── docs/                    # Documentation
├── shared/                  # Shared constants
└── package.json             # Root workspace scripts
```

## Runtime flow

1. The client loads the auth state from local storage and routes users to login or chat screens.
2. The server authenticates requests with JWT and validates user data before creating or updating accounts.
3. Chat rooms are loaded and joined through the REST API and Socket.io.
4. Incoming messages update the chat list in real time and refresh room previews.
5. Account deletion removes the user’s related room, participant, and message records.

## Key implementation notes

- Phone numbers are normalized and validated to accept Nigerian formats such as `08012345678` or `+2348012345678`.
- The add-contact modal uses the user search endpoint with email or phone input.
- Room membership can be hidden for a user when they leave a conversation, which keeps room lists consistent.
