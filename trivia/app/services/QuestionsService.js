
import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"

class Questions {

  async getQuestions() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
    console.log('fetching')
    let body = await response.json()
    console.log(body)
    let newQuestions = body.results.map(questionResults => new Question(questionResults))
    console.log(newQuestions)
    AppState.questions = newQuestions
  }


}

export const questionsService = new Questions()