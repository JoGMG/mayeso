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
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

ExamSchema.pre("save", function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();
  }

  return next();
});

export const examModel = new model("Exam", ExamSchema);
