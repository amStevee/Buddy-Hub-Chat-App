import express from "express";
import v1Routes from "./api/v1/routes.js";
import { errorMiddleware } from "./core/ErrorHandler.js";

const app = express();

app.use(express.json());

const clientBuildPath = path.join(__dirname, "../../client/dist");
app.use(express.static(clientBuildPath));

app.use("/api/v1", v1Routes);

// health check (for testing)
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.use(errorMiddleware);

export default app;
