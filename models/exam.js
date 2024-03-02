/**
 * Class representing an Exam.
 */
class Exam {
  /**
   * Create an exam.
   * @param {string} _id - The unique identifier for the exam.
   * @param {string} author - The author of the exam.
   * @param {string} title - The title of the exam.
   * @param {string} subject - The subject of the exam.
   * @param {number} duration - The duration of the exam in minutes.
   * @param {Array<Question>} questions - The questions in the exam.
   * @param {number} total - The total points of the exam.
   */
  constructor (_id, author, title, subject, duration, questions, total) {
    this._id = _id;
    this.author = author;
    this.title = title;
    this.subject = subject;
    this.duration = duration;
    this.questions = questions;
    this.total = total;
  }
}

module.exports = Exam;
