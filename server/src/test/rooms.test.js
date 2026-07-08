import request from "supertest";
import app from "../app.js";
import { prisma } from "../core/prisma.js";
import dotenv from "dotenv";

dotenv.config();

let token;
let userA;
let userB;
let roomId;

beforeAll(async () => {
  await prisma.roomParticipant.deleteMany({});
  await prisma.messages.deleteMany({});
  await prisma.rooms.deleteMany({});
  await prisma.users.deleteMany({});

  const responseA = await request(app).post("/api/v1/users").send({
    first_name: "Room",
    last_name: "UserA",
    phone: "08012345678",
    email: "room.user.a@example.com",
    password: "Password123",
  });

  const responseB = await request(app).post("/api/v1/users").send({
    first_name: "Room",
    last_name: "UserB",
    phone: "08012345679",
    email: "room.user.b@example.com",
    password: "Password123",
  });

  userA = responseA.body;
  userB = responseB.body;

  const loginResponse = await request(app).post("/api/v1/auth/login").send({
    email: userA.email,
    password: "Password123",
  });

  token = loginResponse.body.token;
});

afterAll(async () => {
  await prisma.messages.deleteMany({});
  await prisma.roomParticipant.deleteMany({});
  await prisma.rooms.deleteMany({});
  await prisma.users.deleteMany({});
  await prisma.$disconnect();
});

describe("Rooms API", () => {
  it("should create a room and return 201", async () => {
    const response = await request(app)
      .post("/api/v1/rooms")
      .set("Authorization", `Bearer ${token}`)
      .send({ participants: [userA.id, userB.id] });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
      }),
    );

    roomId = response.body.id;
  });

  it("should hide the participant from user A after leaving", async () => {
    const response = await request(app)
      .delete(`/api/v1/rooms/${roomId}/leave`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({ message: "Contact removed" }),
    );

    const roomsResponse = await request(app)
      .get(`/api/v1/rooms?userId=${userA.id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(roomsResponse.status).toBe(200);
    expect(roomsResponse.body).toEqual([]);
  });
});
