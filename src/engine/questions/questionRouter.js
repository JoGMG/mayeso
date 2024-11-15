import { Router } from "express";
import QuestionController from "./questionController.js";

const questionRouter = Router();

questionRouter.get("/questions", QuestionController.getAll);
questionRouter.get("/question/:id", QuestionController.getOne);
questionRouter.post("/question", QuestionController.create);
questionRouter.put("/question/:id", QuestionController.update);
questionRouter.delete("/question/:id", QuestionController.delete);

export default questionRouter;
