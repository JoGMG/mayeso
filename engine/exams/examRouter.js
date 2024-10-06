import { Router } from "express";
import ExamController from "./examController.js";

const examRouter = Router();

examRouter.get("/exams", ExamController.getAll);
examRouter.get("/exam/:id", ExamController.getOne);
examRouter.post("/exam", ExamController.create);
examRouter.put("/exam/:id", ExamController.update);
examRouter.delete("/exam/:id", ExamController.delete);

export default examRouter;
