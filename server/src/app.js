import express from "express";
import v1Routes from "./api/v1/routes.js";

const app = express();

app.use(express.json());

export default app;
