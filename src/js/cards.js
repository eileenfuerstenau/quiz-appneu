import getByDataJs from '../js/getByDataJs.js'
import getAllByDataJs from '../js/getAllByDataJs.js'

export default function cards() {
  const quizCards = getAllByDataJs('quiz-card')

  quizCards.forEach(card => {
    const button = getByDataJs('answer-button', card)
    const answer = getByDataJs('answer', card)
    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}

/*
 ** Show 1 answer ** 

/*
const answer = getElement('answer')
const answerButton = getElement('answer-button')

console.log(answerButton)

function showAnswer() {
  answer.classList.toggle('hidden')
}

answerButton.addEventListener('click', showAnswer)

** Show all answers ** 
*/
