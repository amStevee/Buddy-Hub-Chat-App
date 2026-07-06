import request from "supertest";
import app from "../app.js"; // Added .js extension
import { prisma, pool } from "../core/prisma.js"; // Added .js extension
import dotenv from "dotenv";

dotenv.config();

afterAll(async () => {
  if (prisma && prisma.$disconnect) {
    await prisma.$disconnect();
  }
  if (pool && pool.end) {
    await pool.end();
  }
});

describe("POST /api/v1/users", () => {
  // Clean up the specific test user safely before the tests run
  beforeEach(async () => {
    try {
      const userModel = prisma.users;
      if (userModel) {
        await userModel.deleteMany({
          where: {
            OR: [
              { email: "test.user@example.com" },
              { email: "invalid.phone@example.com" },
              { email: "duplicate.phone.one@example.com" },
              { email: "duplicate.phone.two@example.com" },
              { email: "login.edge.case@example.com" },
              { phone: "08010203994" },
              { phone: "+2348010203994" },
              { phone: "08010203995" },
              { phone: "+2348010203995" },
            ],
          },
        });
      }
    } catch (err) {
      console.error("🛑 Error running beforeEach cleanup:", err.message);
    }
  }, 15000);

  it("should create a new user and return 201 with user data", async () => {
    const newUser = {
      first_name: "Test",
      last_name: "User",
      // use a valid Nigerian format that the server accepts
      phone: "08010203994",
      email: "test.user@example.com",
      password: "TestPassword123",
    };

    const response = await request(app)
      .post("/api/v1/users")
      .send(newUser)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    // Print out the server response if it fails so we see why it failed
    if (response.status !== 201) {
      console.log(
        "❌ Test 1 failed! Server returned:",
        response.body || response.text,
      );
    }

    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        first_name: "Test",
        last_name: "User",
        email: "test.user@example.com",
        // server returns phone as provided and includes additional fields
        phone: expect.any(String),
        id: expect.any(String),
        created_at: expect.any(String),
        // password hash should not be checked for a concrete value
        password_hash: expect.any(String),
      }),
    );
  }, 10000);

  it("should return 400 when required fields are missing", async () => {
    const invalidUser = {
      email: "missingname@example.com",
    };

    const response = await request(app)
      .post("/api/v1/users")
      .send(invalidUser)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    if (response.status !== 400) {
      console.log(
        "❌ Test 2 failed! Server returned:",
        response.body || response.text,
      );
    }

    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.objectContaining({
        error: expect.any(String),
      }),
    );
  }, 5000);

  it("should return 400 when the phone number is invalid", async () => {
    const invalidUser = {
      first_name: "Test",
      last_name: "User",
      phone: "12345",
      email: "invalid.phone@example.com",
      password: "TestPassword123",
    };

    const response = await request(app)
      .post("/api/v1/users")
      .send(invalidUser)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    if (response.status !== 400) {
      console.log(
        "❌ Test 3 failed! Server returned:",
        response.body || response.text,
      );
    }

    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.objectContaining({
        error: expect.any(String),
      }),
    );
  }, 5000);

  it("should reject a duplicate phone number even when the format differs", async () => {
    const firstUser = {
      first_name: "Test",
      last_name: "User",
      phone: "08010203994",
      email: "duplicate.phone.one@example.com",
      password: "TestPassword123",
    };

    const firstResponse = await request(app)
      .post("/api/v1/users")
      .send(firstUser)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    expect(firstResponse.status).toBe(201);

    const duplicateUser = {
      first_name: "Test",
      last_name: "User",
      phone: "+2348010203994",
      email: "duplicate.phone.two@example.com",
      password: "TestPassword123",
    };

    const duplicateResponse = await request(app)
      .post("/api/v1/users")
      .send(duplicateUser)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    expect(duplicateResponse.status).toBe(400);
    expect(duplicateResponse.body).toEqual(
      expect.objectContaining({
        error: expect.any(String),
      }),
    );
  }, 10000);
});

describe("POST /api/v1/auth/login", () => {
  it("should return 401 when the password is incorrect", async () => {
    const user = {
      first_name: "Login",
      last_name: "User",
      phone: "08010203995",
      email: "login.edge.case@example.com",
      password: "CorrectPassword123",
    };

    const createResponse = await request(app)
      .post("/api/v1/users")
      .send(user)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    expect(createResponse.status).toBe(201);

    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: user.email,
        password: "WrongPassword123",
      })
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    expect(response.status).toBe(401);
    expect(response.body).toEqual(
      expect.objectContaining({
        error: expect.any(String),
      }),
    );
  }, 10000);
});
