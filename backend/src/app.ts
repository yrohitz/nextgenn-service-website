import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import callbackRoutes from "./routes/callback.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "NEXTGENN Backend Running 🚀",
  });
});

/*
==============================
Routes
==============================
*/

app.use("/api/callback", callbackRoutes);
app.use("/api/auth", authRoutes);

/*
==============================
404 Handler
==============================
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;