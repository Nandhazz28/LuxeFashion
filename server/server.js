import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
const corsOptions = {
  origin: [
    "https://luxe-fashion-kuzd6f3yd-nandhazz28s-projects.vercel.app",
    "http://localhost:3000", // for local development
    "http://localhost:5173", // for Vite dev server
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5520;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is finally running on port ${PORT}`);
});
