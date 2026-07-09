# API Documentation

This document reflects the current REST and Socket.io API for Buddy-Hub.

## Base information

- Base URL (development): `http://localhost:3000/api/v1`
- Content type: `application/json`
- Authentication: JWT bearer token

## Authentication

### POST /auth/register

Creates a new user account.

Request body:

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "phone": "08012345678",
  "email": "jane@example.com",
  "password": "StrongPassword123"
}
```

Notes:

- Phone numbers must be valid Nigerian numbers.
- Invalid symbols such as `%`, `$`, and `*` are rejected.

Response: `201` with a user object and JWT token.

### POST /auth/login

Authenticates a user.

Request body:

```json
{
  "email": "jane@example.com",
  "password": "StrongPassword123"
}
```

Response: `200` with the authenticated user and a JWT token.

### GET /auth/me

Returns the current authenticated user.

Headers:

```http
Authorization: Bearer <token>
```

## Users

### PUT /users/me

Updates the current user profile.

Request body example:

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane@example.com",
  "phone": "+2348012345678"
}
```

Response: `200` with the updated user payload.

### DELETE /users/me

Deletes the current user account and related room/message history.

Response: `200` with a success message.

## Rooms

### GET /rooms

Lists the current user’s visible rooms.

Query params:

- `userId` (required for the current client flow)

Response: `200` with an array of rooms, including participants and messages.

### POST /rooms

Creates a room for the supplied participant IDs.

Request body:

```json
{
  "participants": ["user-a-id", "user-b-id"]
}
```

Response: `201` with the created room.

### GET /rooms/:roomId

Returns room details and participants for the authenticated user.

### GET /rooms/:id/messages

Returns all messages for a room.

### DELETE /rooms/:roomId/leave

Hides the current user from a room so it no longer appears in their chat list.

## Real-time events (Socket.io)

### join

```json
{ "room": "room-id" }
```

### leave

```json
{ "room": "room-id" }
```

### create_room

```json
{ "participants": ["user-a-id", "user-b-id"] }
```

### message

```json
{ "roomId": "room-id", "text": "Hello there" }
```

The server emits a `message` event to all connected clients in the room, and the client refreshes the room list when a new message arrives.

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
  "first_name": "string",
  "last_name": "string",
  "phone": "string",
  "email": "string",
  "created_at": "timestamp"
}
```

---

## Room

```json
{
  "id": 1,
  "name": "string", //combination of first_name and last_name
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
