# API Documentation

This document defines the REST (and real-time) API for the Chat Application backed by PostgreSQL and Prisma ORM.

---

# Base Information

- **Base URL (Development):** `http://localhost:PORT/api/v1`
- **Base URL (Production):** `https://[prod-domain.com]/api/v1`
- **Content Type:** `application/json`
- **Auth Method:** JWT (Bearer Token)

---

# Authentication

Most endpoints require authentication.

### Authorization Header

```http
Authorization: Bearer <token>
```

---

# Authentication Routes

## Register User

### POST `/auth/register`

Creates a new user account.

### Request Body

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "strongpassword"
}
```

### Response

```json
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

---

## Login User

### POST `/auth/login`

Authenticates a user and returns a JWT token.

### Request Body

```json
{
  "email": "john@example.com",
  "password": "strongpassword"
}
```

### Response

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

---

## Get Current User

### GET `/auth/me`

Returns authenticated user info.

### Headers

```http
Authorization: Bearer <token>
```

### Response

```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com"
}
```

---

# Rooms

## Create Room

### POST `/rooms`

Creates a new chat room.

### Auth Required: YES

### Request Body

```json
{
  "name": "General Chat"
}
```

### Response

```json
{
  "id": 1,
  "name": "General Chat",
  "created_at": "2026-06-03T10:00:00Z"
}
```

---

## Get All Rooms

### GET `/rooms`

Fetch all chat rooms.

### Response

```json
[
  {
    "id": 1,
    "name": "General Chat",
    "created_at": "2026-06-03T10:00:00Z"
  }
]
```

---

## Get Single Room

### GET `/rooms/:roomId`

### Response

```json
{
  "id": 1,
  "name": "General Chat",
  "created_at": "2026-06-03T10:00:00Z"
}
```

---

## Delete Room

### DELETE `/rooms/:roomId`

Deletes a chat room and optionally its messages.

### Response

```json
{
  "message": "Room deleted successfully"
}
```

---

# Messages

## Send Message

### POST `/messages`

Creates a new message in a room.

### Auth Required: YES

### Request Body

```json
{
  "text": "Hello everyone!",
  "room_id": 1
}
```

### Response

```json
{
  "id": 1,
  "text": "Hello everyone!",
  "sender_id": 1,
  "room_id": 1,
  "created_at": "2026-06-03T10:10:00Z"
}
```

---

## Get Room Messages

### GET `/messages/room/:roomId`

Returns all messages in a room (ordered by time).

### Response

```json
[
  {
    "id": 1,
    "text": "Hello everyone!",
    "sender_id": 1,
    "room_id": 1,
    "created_at": "2026-06-03T10:10:00Z"
  }
]
```

---

## Delete Message

### DELETE `/messages/:messageId`

Deletes a message.

### Auth Required: YES (Owner only or admin)

### Response

```json
{
  "message": "Message deleted successfully"
}
```

---

# Real-Time Events (socket.io)

This application uses socket.io for live chat updates.

## Connection

```text
socket.io
```

---

## Events

### 1. Join Room

```json
{
  "event": "join_room",
  "data": {
    "room_id": 1
  }
}
```

---

### 2. Send Message

```json
{
  "event": "send_message",
  "data": {
    "text": "Hello!",
    "room_id": 1,
    "sender_id": 1
  }
}
```

---

### 3. Receive Message

Broadcasted to all room members:

```json
{
  "event": "new_message",
  "data": {
    "id": 1,
    "text": "Hello!",
    "sender_id": 1,
    "room_id": 1,
    "created_at": "2026-06-03T10:10:00Z"
  }
}
```

---

### 4. User Presence

```json
{
  "event": "user_online",
  "data": {
    "user_id": 1
  }
}
```

```json
{
  "event": "user_offline",
  "data": {
    "user_id": 1
  }
}
```

---

# Data Models

## User

```json
{
  "id": 1,
  "username": "string",
  "email": "string",
  "created_at": "timestamp"
}
```

---

## Room

```json
{
  "id": 1,
  "name": "string",
  "created_at": "timestamp"
}
```

---

## Message

```json
{
  "id": 1,
  "text": "string",
  "sender_id": 1,
  "room_id": 1,
  "created_at": "timestamp"
}
```

---

# Error Responses

## 400 Bad Request

```json
{
  "error": "Invalid request data"
}
```

---

## 401 Unauthorized

```json
{
  "error": "Unauthorized"
}
```

---

## 403 Forbidden

```json
{
  "error": "You do not have permission to perform this action"
}
```

---

## 404 Not Found

```json
{
  "error": "Resource not found"
}
```

---

## 500 Server Error

```json
{
  "error": "Internal server error"
}
```

---

# Pagination (Recommended)

For messages:

### Request

```
GET /messages/room/:roomId?cursor=123&limit=50
```

### Response

```json
{
  "data": [],
  "next_cursor": 150
}
```

---

# Security Rules

- All passwords are hashed (never returned in responses)
- JWT required for protected routes
- Users can only delete their own messages (unless admin)
- Input validation required on all endpoints

---

# Notes

- Keep API responses consistent
- Always use Prisma service layer for DB access
- Avoid exposing internal database IDs unnecessarily
- Prefer pagination for all list endpoints
- socket.io events should mirror REST actions for consistency
