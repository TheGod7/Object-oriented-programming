class UI {
  constructor() {}

  /**
   *
   * @param {String} text Question
   */
  ShowQuestion(text) {
    let questionTitle = document.getElementById("question");
    questionTitle.innerHTML = `<h1>${text}</h1>`;
  }

  /**
   *
   * @param {String[]} choices the array of choices
   * @param {Function} callback The functions
   */
  ShowChoices(choices, callback) {
    let choicesContainer = document.getElementById("choices");

    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      let button = document.createElement("button");
      button.innerText = `${choices[i]}`;
      button.addEventListener("click", () => callback(choices[i]));

      choicesContainer.append(button);
    }
  }

  showProgress(index, maxIndex) {
    let progressContainer = document.getElementById("progress");
    progressContainer.innerHTML = `<p>${index} of ${maxIndex}</p>`;
  }

  ShowScore(score) {
    let scoreContainer = document.getElementById("sc");
    scoreContainer.innerHTML =
      "<h1> Your score is " +
      score +
      "</h1><br><p> Reload if you want to play again</p>";
  }
}

export { UI };
