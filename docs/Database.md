# Database Documentation

# Database System

**Database:** PostgreSQL
**ORM & Migration Tool:** Prisma ORM
**Production Database Provider:** Neon

---

# Overview

This database supports:

- User authentication
- Chat rooms
- Real-time messaging
- User presence tracking

The project uses:

- PostgreSQL as the database engine
- Prisma as the ORM
- Prisma Migrations for schema versioning
- Neon-hosted PostgreSQL in production

---

# Entity Relationship Overview

```text
users
  └── messages.sender_id

rooms
  └── messages.room_id

messages
```

---

# Tables

## users

Stores application users.

### Columns

| Column        | Type         | Constraints               |
| ------------- | ------------ | ------------------------- |
| id            | SERIAL       | PRIMARY KEY               |
| username      | VARCHAR(50)  | UNIQUE, NOT NULL          |
| email         | VARCHAR(255) | UNIQUE, NOT NULL          |
| password_hash | TEXT         | NOT NULL                  |
| created_at    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP |

### Notes

- Passwords are never stored in plain text.
- Emails must be unique and can't be null.

---

## rooms

Stores chat rooms.

### Columns

| Column     | Type         | Constraints               |
| ---------- | ------------ | ------------------------- |
| id         | SERIAL       | PRIMARY KEY               |
| name       | VARCHAR(100) | NOT NULL                  |
| created_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP |

### Notes

- Rooms can represent direct chats or group chats.

---

## messages

Stores chat messages.

### Columns

| Column     | Type      | Constraints               |
| ---------- | --------- | ------------------------- |
| id         | SERIAL    | PRIMARY KEY               |
| text       | TEXT      | NOT NULL                  |
| sender_id  | INTEGER   | REFERENCES users(id)      |
| room_id    | INTEGER   | REFERENCES rooms(id)      |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

### Notes

- Messages belong to one room.
- Messages are ordered by `created_at`.

---

# Relationships

## users → messages

One user can send many messages.

```text
users.id → messages.sender_id
```

## rooms → messages

One room can contain many messages.

```text
rooms.id → messages.room_id
```

---

# Indexes

## messages_room_id_created_at_idx

Improves message retrieval performance for chat history.

```sql
CREATE INDEX messages_room_id_created_at_idx
ON messages(room_id, created_at);
```

---

# Prisma Setup

## Prisma Directory Structure

```text
server/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
├── .env
└── package.json
```

---

## Required Dependencies

Install Prisma and PostgreSQL driver:

```bash
pnpm add @prisma/client
pnpm add prisma --save-dev
```

Initialize Prisma:

```bash
npx prisma init
```

This creates:

```text
prisma/
  schema.prisma

.env
```

---

# Prisma Schema

Example datasource configuration:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

---

# Local Development Database Setup

## Prerequisites

Install:

- PostgreSQL 15+
- Node.js
- pnpm

Verify PostgreSQL installation:

```bash
psql --version
```

---

## Create Local Database

Login to PostgreSQL:

```bash
psql -U postgres
```

Create database:

```sql
CREATE DATABASE chat_app_dev;
```

Verify:

```sql
\l
```

You should see:

```text
chat_app_dev
```

---

## Environment Variables

Create:

```text
server/.env
```

Example:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/chat_app_dev?schema=public"
```

Replace:

- `postgres` with your database user
- `password` with your database password
- `chat_app_dev` with your database name

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Run Initial Migration

Create and apply migration:

```bash
npx prisma migrate dev --name init
```

Prisma will:

1. Create migration files
2. Apply migration locally
3. Update migration history
4. Generate Prisma Client

---

## View Database

Launch Prisma Studio:

```bash
npx prisma studio
```

---

# Development Workflow

Whenever schema changes are made:

## 1. Update schema.prisma

Example:

```prisma
model User {
  id       Int    @id @default(uuid())
  username String @unique
}
```

## 2. Create Migration

```bash
npx prisma migrate dev --name add_user_profile
```

## 3. Commit Generated Migration

Always commit:

```text
prisma/schema.prisma
prisma/migrations/
```

Never delete migration history after it has been shared with the team.

---

# Production Database Setup (Neon)

## Create Neon Project

1. Create a Neon account.
2. Create a new project.
3. Create a production database.
4. Copy the connection string.

Example:

```env
postgresql://user:password@ep-xxxx.us-east-1.aws.neon.tech/buddy_hub_chat_app_prod?sslmode=require
```

---

## Production Environment Variables

Configure:

```env
DATABASE_URL="postgresql://user:password@ep-xxxx.us-east-1.aws.neon.tech/buddy_hub_chat_app_prod?sslmode=require"
```

Never commit production credentials to Git.

---

## Apply Migrations in Production

Production should **never** use:

```bash
npx prisma migrate dev
```

Use:

```bash
npx prisma migrate deploy
```

This command:

- Applies existing migrations
- Does not create new migrations
- Is safe for CI/CD deployments

---

# Deployment Pipeline

Recommended deployment sequence:

```bash
pnpm install
npx prisma generate
npx prisma migrate deploy
pnpm run start
```

Every deployment should automatically execute:

```bash
npx prisma migrate deploy
```

before starting the application.

---

# Team Workflow

## Creating Database Changes

1. Modify:

```text
prisma/schema.prisma
```

2. Generate migration:

```bash
npx prisma migrate dev --name migration_name
```

3. Commit:

```text
prisma/schema.prisma
prisma/migrations/*
```

4. Push changes.

---

## Pulling New Database Changes

After pulling latest code:

```bash
npm install
npx prisma generate
npx prisma migrate dev
```

This updates the local database to match the latest schema.

---

# Common Queries

## Fetch Room Messages

```sql
SELECT *
FROM messages
WHERE room_id = $1
ORDER BY created_at ASC;
```

## Create Message

```sql
INSERT INTO messages(text, sender_id, room_id)
VALUES($1, $2, $3)
RETURNING *;
```

---

# Naming Conventions

| Rule                        | Example         |
| --------------------------- | --------------- |
| snake_case                  | created_at      |
| plural table names          | users, messages |
| foreign keys end with `_id` | sender_id       |

---

# Future Planned Tables

Potential future additions:

- room_members
- message_reads
- attachments
- notifications
- blocked_users

---

# Performance Notes

- Frequently queried columns should be indexed.
- Avoid `SELECT *` in production-heavy queries.
- Message pagination should be implemented as data grows.
- Use Prisma query selection to avoid fetching unnecessary fields.

---

# Security Notes

- Never expose `DATABASE_URL`.
- Store passwords using bcrypt hashing.
- Always validate user input before persistence.
- Use Prisma parameterized queries to prevent SQL injection.
- Restrict production database access to deployment environments only.

---

# Backup & Recovery Strategy

## Development

- Local backups are optional.
- Database can be recreated from Prisma migrations.

## Production (Neon)

Recommended:

- Enable Neon automated backups.
- Enable point-in-time recovery.
- Use separate databases for:
  - Development
  - Staging
  - Production

Recovery process:

1. Restore Neon backup.
2. Run:

```bash
npx prisma migrate deploy
```

to ensure schema consistency.

---

# Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Create local database
createdb buddy_hub_chat_app_dev

# 3. Configure environment variables
cp .env.example .env

# 4. Generate Prisma Client
npx prisma generate

# 5. Run migrations
npx prisma migrate dev

# 6. Start server
npm run dev

# 7. Open database UI (optional)
npx prisma studio
```
