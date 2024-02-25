/** 
 * 
 */
class Question {
  constructor(_id, author, question, options, answer) {
    this._id = _id;
    this.author = author;
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

module.exports = Question;
