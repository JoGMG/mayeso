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
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

QuestionSchema.pre("save", function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();
  }

  return next();
});

export const questionModel = new model("Question", QuestionSchema);
