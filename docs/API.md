# Chat App API Documentation

## Base URL

### Development:

```
http://localhost:3000/api/v1
```

### Production:

```
https:[produrl]/api/v1
```

## Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer <token>
```

## Response Format

### Success

```
JSON
{
    "success": true,
    "data": {}
}
```

### Error

```
JSON
{
    "success": false,
    "message": "Something went wrong"
}
```

##Chat Endpoints

### Send Message

#### POST /chat/message

create a new message in a room.

#### Request Body

```
JSON
{
    "text": "Hello👋",
    "roomId": 1
}
```

#### Response

```
JSON
{
    "id": 15,
    "text": "Hello world"
    "sender_id": 3,
    "room_id": 1,
    "created_at": "2026-06----"
}
```

### Get Room Message

#### Get /chat/messages/:roomId

Returns all messages for a room.

**Example**

```
Get /chat/messages/1
```

**Response**

```
JSON
[
    {
        "id":1,
        "text": "Hey Steve",
        "sender_id": 2,
        "room_id": 1
    }
]
```

## API Versioning

Current API version:

```
v1
```

Versioned route example:

```
/api/v1/chat/messages
```
