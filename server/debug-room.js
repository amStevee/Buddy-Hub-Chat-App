import request from "supertest";
import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  try {
    const resA = await request(app).post("/api/v1/users").send({
      first_name: "Room",
      last_name: "UserA",
      phone: "08012345678",
      email: "room.user.a@example.com",
      password: "Password123",
    });
    console.log("A", resA.status, resA.body);

    const resB = await request(app).post("/api/v1/users").send({
      first_name: "Room",
      last_name: "UserB",
      phone: "08012345679",
      email: "room.user.b@example.com",
      password: "Password123",
    });
    console.log("B", resB.status, resB.body);

    const login = await request(app).post("/api/v1/auth/login").send({
      email: resA.body.email,
      password: "Password123",
    });
    console.log("login", login.status, login.body);

    if (!login.body?.token) {
      console.log("No token available, stopping.");
      process.exit(1);
    }

    const room = await request(app)
      .post("/api/v1/rooms")
      .set("Authorization", `Bearer ${login.body.token}`)
      .send({ participants: [resA.body.id, resB.body.id] });
    console.log("room", room.status, room.body);
  } catch (err) {
    console.error("SCRIPT ERROR", err);
  }
})();
