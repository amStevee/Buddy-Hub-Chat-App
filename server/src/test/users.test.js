import request from "supertest";
import app from "../app.js"; // Added .js extension
import { prisma, pool } from "../core/prisma.js"; // Added .js extension
import dotenv from "dotenv";
import { hashPassword } from "../core/utils.js";

dotenv.config();

describe("POST /api/v1/users", () => {
  // Clean up the specific test user safely before the tests run
  beforeEach(async () => {
    try {
      const userModel = prisma.users;
      if (userModel) {
        await userModel.deleteMany({
          where: { email: "test.user@example.com" },
        });
      }
    } catch (err) {
      console.error("🛑 Error running beforeEach cleanup:", err.message);
    }
  });

  // This block safely shuts down the pool after tests finish
  afterAll(async () => {
    if (prisma && prisma.$disconnect) {
      await prisma.$disconnect();
    }
    if (pool && pool.end) {
      await pool.end();
    }
  });

  it("should create a new user and return 201 with user data", async () => {
    const newUser = {
      first_name: "Test",
      last_name: "User",
      phone: "+234-010203994",
      email: "test.user@example.com",
      password: "TestPassword123"
    };

    const response = await request(app)
      .post("/api/v1/users")
      .send(newUser)
      .set("Accept", "application/json");

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
        phone: "+234-010203994",
        email: "test.user@example.com",
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
      .set("Accept", "application/json");

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
});
