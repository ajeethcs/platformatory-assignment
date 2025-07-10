import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import profileRoutes from "./routes/profile";
import { checkJwt, jwtErrorHandler } from "./middleware/auth";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

// ✅ Log headers & token for debugging (optional)
app.use((req, res, next) => {
  console.log("Authorization Header:", req.headers.authorization);
  next();
});

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Unable to connect to mongodb", err));

app.use("/api/profile", checkJwt, profileRoutes);
app.use(jwtErrorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
