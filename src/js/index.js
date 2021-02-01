console.log('hello world')

const button1 = document.querySelector('[data-js=buttonHome]')
const button2 = document.querySelector('[data-js=buttonBookmark]')
const button3 = document.querySelector('[data-js=buttonCreate]')
const button4 = document.querySelector('[data-js=buttonSettings]')

const page1 = document.querySelector('[data-js=pageHome]')
const page2 = document.querySelector('[data-js=pageBookmark]')
const page3 = document.querySelector('[data-js=create]')
const page4 = document.querySelector('[data-js=pageSettings]')

button1.addEventListener('click', () => {
  page1.classList.remove('hidden')
  page2.classList.add('hidden')
  page3.classList.add('hidden')
  page4.classList.add('hidden')
})

button2.addEventListener('click', () => {
  page1.classList.add('hidden')
  page2.classList.remove('hidden')
  page3.classList.add('hidden')
  page4.classList.add('hidden')
})

button3.addEventListener('click', () => {
  page1.classList.add('hidden')
  page2.classList.add('hidden')
  page3.classList.remove('hidden')
  page4.classList.add('hidden')
})

button4.addEventListener('click', () => {
  page1.classList.add('hidden')
  page2.classList.add('hidden')
  page3.classList.add('hidden')
  page4.classList.remove('hidden')
})

function getElement(nameJS) {
  return document.querySelector(`[data-js="${nameJS}"]`)
}

/* ** Toggle 1 Bookmark **

const bookmark = getElement('bookmark')
const bookmarkButton = getElement('bookmarkButton')

function toggleBookmark() {
  bookmark.classList.toggle('fill')
}

bookmarkButton.addEventListener('click', toggleBookmark) 

** Toggle All Bookmarks ** 

*/

const bookmarks = document.querySelectorAll('[data-js="bookmark"]')

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('fa')
  })
})

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

const quizCards = document.querySelectorAll('[data-js="quiz-card"]')

quizCards.forEach(card => {
  const button = card.querySelector('[data-js="answer-button"]')
  const answer = card.querySelector('[data-js="answer"]')
  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

/* Add textmaxlength */

const sections = document.querySelectorAll('[data-js="create__section"]')

sections.forEach(form => {
  const textArea = form.querySelector('[data-js="create__textarea"]')
  const counter = form.querySelector('[data-js="create__letter-count"]')

  textArea.addEventListener('input', () => {
    const textLength = textArea.value.length
    counter.textContent = `${textArea.maxLength - textLength}/ ${
      textArea.maxLength
    }`
  })
})

/* Add form reset, preventdefault and focus */

const form = getElement('form')
const firstInput = document.querySelector('#question-input')

form.addEventListener('submit', event => {
  event.preventDefault()
  form.reset()
  firstInput.focus()
  sections.forEach(section => {
    const textArea = section.querySelector('[data-js="create__textarea"]')
    const counter = section.querySelector('[data-js="create__letter-count"]')
    const textLength = textArea.value.length
    counter.textContent = `${textArea.maxLength}/ ${textArea.maxLength}`
  })
})

/* const form = getElement('form')
const firstInput = document.querySelector('#first-input')

form.addEventListener('submit', event => {
  const counter = document.querySelectorAll('[data-js="create__letter-count"]')
  event.preventDefault()
  form.reset()
  firstInput.focus()
  counter.textContent = 150
})
 */
