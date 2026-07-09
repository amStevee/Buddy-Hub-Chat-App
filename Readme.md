# Buddy-Hub

Buddy-Hub is a lightweight real-time chat app for family, friends, and teams. It supports direct conversations, contact search by email or phone, live chat updates, and account-management features such as profile editing and account deletion.

## Tech Stack

1. Frontend:
   - Vanilla JavaScript + Vite
   - Tailwind CSS
2. Backend:
   - Node.js
   - Express
   - Prisma
3. Database:
   - PostgreSQL
4. Realtime:
   - Socket.io

## Project Structure

See [docs/Architecture.md](./docs/Architecture.md).

## API Documentation

See [docs/API.md](./docs/API.md).

## Database Documentation

See [docs/Database.md](./docs/Database.md).

## Recent Product Updates

- Nigerian phone numbers are validated on sign-up and profile update.
- Invalid symbols such as `%`, `$`, and `*` are rejected in phone input.
- The add-contact modal now includes guidance for searching by email or phone.
- Chat lists refresh automatically when a new message arrives.
- Deleting an account removes the related room and message history for the affected conversation.

# Setup Guide

## Prerequisites

Make sure you have the following installed:

- Node.js (V22.14.0+)
- pnpm (`npm install -g pnpm@latest-10`)
- Git

1. Clone the repository by running `git clone https://github.com/amStevee/Buddy-Hub-Chat-App.git`
2. Run `cd Buddy-Hub-Chat-App`
3. Install dependencies with `pnpm install`

## Available Scripts

From the repository root:

- Development: `pnpm dev`
- Client build: `pnpm build:client`
- Server build: `pnpm build:server`
- Test: `pnpm test`

# Contributing

1. Fork the repo
2. Create a new branch

```bash
git checkout -b branch-name
```

3. Commit your changes
4. Push and open a pull request (PR)
