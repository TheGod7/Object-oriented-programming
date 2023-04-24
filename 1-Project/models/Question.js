class Question {
  /**
   *
   * @param {String} question The Question
   * @param {String[]} choices Array of choices
   * @param {String} answer The answer
   */
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choices The choices to validate
   * @returns {boolean} If the validation is successful returns true
   */
  CorrectChoice(choices) {
    return choices === this.answer;
  }
}

export { Question };
