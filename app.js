import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import allRouter from "./engine/allRouter.js";

configDotenv();

try {
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to DB successfully");
} catch (error) {
  let errMsg = "Failed to connect to DB";

  if (error instanceof Error) errMsg = error.message;

  throw Error(errMsg);
}

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", allRouter);

app.listen(PORT, () => {
  console.log(`App started, listening on port ${PORT}`);
});
