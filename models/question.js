/**
 * Class representing a Question.
 */
class Question {
  /**
   * Create a question.
   * @param {string} _id - The unique identifier for the question.
   * @param {string} author - The author of the question.
   * @param {string} question - The question text.
   * @param {Array<string>} options - The possible answers to the question.
   * @param {string} answer - The correct answer to the question.
   */
  constructor (_id, author, question, options, answer) {
    this._id = _id;
    this.author = author;
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

module.exports = Question;
