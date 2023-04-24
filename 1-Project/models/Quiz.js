import { Question } from "./Question.js";

class Quiz {
  score = 0;
  QuestionIndex = 0;

  /**
   *
   * @param {Question[]} questions Question array
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   * @return {Question} The question found
   */
  getQuestionIndex() {
    return this.questions[this.QuestionIndex];
  }

  isEnded() {
    return this.questions.length === this.QuestionIndex;
  }

  guess(answer) {
    if (this.getQuestionIndex().CorrectChoice(answer)) {
      this.score++;
    }

    this.QuestionIndex++;
  }
}

export { Quiz };
