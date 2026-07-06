import express from "express";
import v1Routes from "./api/v1/routes.js";
import { errorMiddleware } from "./core/ErrorHandler.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import helmet from "helmet";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin: "https://buddy-hub-web.onrender.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(helmet());
app.use(cors(corsOptions));

app.use(express.json());

const clientBuildPath = path.join(__dirname, "../../client/dist");
app.use(express.static(clientBuildPath));

app.use("/api/v1", v1Routes);

// health check (for testing)
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use((req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.use(errorMiddleware);

export default app;
