import { model, Schema } from "mongoose";

export const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  points: {
    type: String,
    default: 2,
  },
}, { timestamps: true });

export const questionModel = new model("Question", QuestionSchema);
