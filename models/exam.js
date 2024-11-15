import { model, Schema, Types } from "mongoose";

const ExamSchema = new Schema({
  author: {
    type: String,
    default: "Anonymous",
  },
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 10,
  },
  questions: {
    type: [Types.ObjectId],
    ref: "Question",
    required: true,
  },
}, { timestamps: true });

export const examModel = new model("Exam", ExamSchema);
