import { Data } from "./data.js";
import { Question } from "../models/Question.js";

export const questions = Data.map((Q) => {
  return new Question(Q.question, Q.choices, Q.answer);
});
