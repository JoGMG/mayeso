import { examModel } from "../../models/exam.js";
import { questionModel } from "../../models/question.js";
import { CustomResponse } from "../utility.js";

class ExamController {

  static async getAll(req, res) {
    const page = Number(req.query.page) || undefined;
    const limit = Number(req.query.limit) || undefined;
    const skip = (page - 1) * limit || undefined;

    try {
      let msg = "Exams found";

      const exams = await examModel.find().populate("questions").skip(skip).limit(limit);
      if (!exams?.length) msg = "No exam exists";

      return res.status(200).json(new CustomResponse(msg, false, exams, page, limit));
    } catch (error) {
      const errMsg = error.message || "Internal server error";
      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;

    try {
      let msg = "Exam found";

      const exam = await examModel.findById(id).populate("questions");
      if (!exam) msg = "Exam does not exist";

      return res.status(200).json(new CustomResponse(msg, false, exam));
    } catch (error) {
      const errMsg = error.message || "Internal server error";
      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async create(req, res) {
    const { body } = req;
    const { questions } = body;

    try {
      body.questions = await Promise.all(
        questions.map(async (element) => {
          const newQuestions = await questionModel.create(element);
          return newQuestions._id;
        }),
      );

      const newExam = await examModel.create(body);
      return res
        .status(201)
        .json(new CustomResponse("Exam created successfully", false, newExam));
    } catch (error) {
      const errMsg = error.message || "Internal server error";
      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    try {
      let msg = "Exam not found";

      const updatedExam = await examModel.findByIdAndUpdate(id, body);
      if (!updatedExam) return res.status(404).json(new CustomResponse(msg, true));

      msg = "Exam updated successfully";
      return res.status(200).json(new CustomResponse(msg, false, updatedExam));
    } catch (error) {
      const errMsg = error.message || "Internal server error";
      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      let msg = "Exam not found";

      const exam = await examModel.findByIdAndDelete(id);
      if (!exam) return res.status(404).json(new CustomResponse(msg, true));

      msg = "Exam deleted successfully";
      return res.status(200).json(new CustomResponse(msg, false));
    } catch (error) {
      const errMsg = error.message || "Internal server error";
      return res.status(500).json(new CustomResponse(errMsg, true));
    }
  }
}

export default ExamController;
