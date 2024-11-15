import { questionModel } from "../../models/question.js";
import { examModel } from "../../models/exam.js";
import { CustomResponse } from "../utility.js";

class QuestionController {
  static async getAll(req, res) {
    const page = Number(req.query.page) || undefined;
    const limit = Number(req.query.limit) || undefined;
    const skip = (page - 1) * limit || undefined;

    try {
      let msg = "Questions found";

      const questions = await questionModel.find().skip(skip).limit(limit);
      if (!questions?.length) msg = "No question exists";

      const total = await examModel.find().countDocuments();
      return res.status(200).json(new CustomResponse(msg, false, questions, page, limit, total));
    } catch (error) {
      const errMsg = error.message || "Internal server error";
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
            newQuestion,
          ),
        );
    } catch (error) {
      const errMsg = error.message || "Internal server error";
      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    try {
      let msg = "Question not found";

      const updatedQuestion = await questionModel.findByIdAndUpdate(id, body);
      if (!updatedQuestion) return res.status(404).json(new CustomResponse(msg, true));

      msg = "Question updated successfully";
      return res
        .status(200)
        .json(new CustomResponse(msg, false, updatedQuestion));
    } catch (error) {
      const errMsg = error.message || "Internal server error";
      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      let msg = "Question not found";

      const question = await questionModel.findByIdAndDelete(id);
      if (!question) return res.status(404).json(new CustomResponse(msg, true));

      msg = "Question deleted successfully";

      const exams = await examModel.find({ questions: id });

      for (let exam of exams) {
        exam.questions.pull(id);
        await exam.save();
      }

      return res.status(200).json(new CustomResponse(msg, false));
    } catch (error) {
      const errMsg = error.message || "Internal server error";
      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }
}

export default QuestionController;
