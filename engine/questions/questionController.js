import { questionModel } from "../../models/question.js";
import { examModel } from "../../models/exam.js";
import { CustomResponse } from "../utility.js";

class QuestionController {
  static async getAll(req, res) {
    try {
      let msg = "Questions found";

      const questions = await questionModel.find();
      if (!questions.length) msg = "No question exists";

      return res.status(200).json(new CustomResponse(msg, false, questions));
    } catch (error) {
      let errMsg = "Internal server error";

      if (error instanceof Error) errMsg = error.message;

      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;

    try {
      let msg = "Question found";

      const question = await questionModel.findById(id);
      if (!question) msg = "Question does not exist";

      return res.status(200).json(new CustomResponse(msg, false, question));
    } catch (error) {
      let errMsg = "Internal server error";

      if (error instanceof Error) errMsg = error.message;

      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async create(req, res) {
    const { body } = req;

    try {
      const newQuestion = await questionModel.create(body);

      return res
        .status(201)
        .json(
          new CustomResponse(
            "Question created successfully",
            false,
            newQuestion
          )
        );
    } catch (error) {
      let errMsg = "Internal server error";

      if (error instanceof Error) errMsg = error.message;

      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    try {
      let msg = "Question not found";

      const question = await questionModel.findById(id);
      if (!question) return res.status(404).json(new CustomResponse(msg, true));

      Object.assign(question, body);
      const updatedQuestion = await question.save();

      msg = "Question updated successfully";

      return res
        .status(200)
        .json(new CustomResponse(msg, false, updatedQuestion));
    } catch (error) {
      let errMsg = "Internal server error";

      if (error instanceof Error) errMsg = error.message;

      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      let msg = "Question not found";

      const question = await questionModel.findById(id);
      if (!question) return res.status(404).json(new CustomResponse(msg, true));

      await questionModel.findByIdAndDelete(id);
      msg = "Question deleted successfully";

      const exams = await examModel.find({ questions: id });

      for (let exam of exams) {
        exam.questions.pull(id);
        await exam.save();
      }

      return res.status(200).json(new CustomResponse(msg, false));
    } catch (error) {
      let errMsg = "Internal server error";

      if (error instanceof Error) errMsg = error.message;

      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }
}

export default QuestionController;
