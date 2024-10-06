import { Router } from "express";
import examRouter from "./exams/examRouter.js";
import questionRouter from "./questions/questionRouter.js";

const allRouter = Router();

allRouter.use("/api", examRouter);
allRouter.use("/api", questionRouter);

export default allRouter;
