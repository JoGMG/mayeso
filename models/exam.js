/**
 * Class representing an Exam.
 */
class Exam {
  /**
   * Create an exam.
   * @param {string} _id - The unique identifier for the exam.
   * @param {string} author - The author of the exam.
   * @param {string} title - The title of the exam.
   * @param {number} duration - The duration of the exam in minutes.
   * @param {Array<Question>} questions - The questions in the exam.
   * @param {number} pointsPerQuestion - The number of points for each question.
   */
  constructor (_id, author, title, duration, questions, pointsPerQuestion) {
    this._id = _id;
    this.author = author;
    this.title = title;
    this.duration = duration;
    this.questions = questions;
    this.pointsPerQuestion = pointsPerQuestion;
  }
}

module.exports = Exam;
