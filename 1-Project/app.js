import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/ui.js";

/**
 *
 * @param {Quiz} quiz
 * @param {UI} ui
 */
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.ShowScore(quiz.score + 1);
  } else {
    console.log(quiz);
    ui.ShowQuestion(quiz.getQuestionIndex().question);
    ui.showProgress(quiz.QuestionIndex + 1, quiz.questions.length);
    ui.ShowChoices(quiz.getQuestionIndex().choices, (Current) => {
      quiz.guess(Current);
      renderPage(quiz, ui);
    });
  }
};

main();

function main() {
  let quiz = new Quiz(questions);
  let ui = new UI();

  renderPage(quiz, ui);
}
