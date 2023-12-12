


export class Question {
  constructor(data) {
    this.question = data.question;
    this.difficulty = data.difficulty;
    this.incorrectAnswers = data.incorrect_answers;
    this.correctAnswer = data.correct_answer;
    this.options = this.incorrectAnswers
    this.options.push(this.correctAnswer)
    this.options.sort()
  }


  get questions() {
    return `
     <div class="container-fluid mb-1">
    <section class="row justify-content-center">
    <div class="col-6">
    <button class="btn bg-dark text-white">${this.question}</button>
    </div>
  </section>
  <section class="row justify-content-center ">
      ${this.answerTemplates}
  </section>
</div>`
  }

  get answerTemplates() {
    let content = ''
    this.options.forEach(option => content += `<div class="col-6 ">
    <button class="btn bg-dark text-white w-100">${option}</button>
  </div>`)
    return content
  }

}


