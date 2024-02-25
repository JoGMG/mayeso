/** 
 * 
 */
class Exam {
  constructor(_id, author, title, duration, questions, pointsPerQuestion) {
    this._id = _id;
    this.author = author;
    this.title = title;
    this.duration = duration;
    this.questions = questions;
    this.pointsPerQuestion = pointsPerQuestion;
  }
}

module.exports = Exam;
