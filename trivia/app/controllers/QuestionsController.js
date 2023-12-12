import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { questionsService } from "../services/QuestionsService.js"


function _drawQuestions() {
  console.log('draw questions')

  let questions = AppState.questions
  let content = ''
  questions.forEach(question => content += question.questions)
  document.getElementById('question-difficulty').innerHTML = content
  console.log(content)
}

export class QuestionsController {
  constructor() {
    console.log('getting started')
    AppState.on('questions', _drawQuestions)
    this.getQuestions()
    _drawQuestions()
  }

  getQuestions() {
    console.log('getting questions, ⁉️')
    questionsService.getQuestions()
  }

}