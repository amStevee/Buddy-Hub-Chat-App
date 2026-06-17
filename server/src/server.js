import http from "node:http";
import app from "./app.js";
import dotenv from "dotenv";
import { Server as IOServer } from "socket.io";
import initSockets from "./sockets/index.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// Attach Socket.IO
const io = new IOServer(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

initSockets(io);

server.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
