import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Question } from './models/Question.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  questions = [
    new Question({
      question: "What is real haggis made of?",
      difficulty: "medium",
    }),
    new Question({
      question: "What is the name of the very first video uploaded to YouTube?",
      difficulty: "medium",
    }),

  ]


}

export const AppState = createObservableProxy(new ObservableAppState())