import getByDataJs from '../js/getByDataJs.js'
import getAllByDataJs from '../js/getAllByDataJs.js'

export default function form() {
  const sections = getAllByDataJs('create__section')

  sections.forEach(form => {
    const textArea = getByDataJs('create__textarea', form)
    const counter = getByDataJs('create__letter-count', form)

    textArea.addEventListener('input', () => {
      const textLength = textArea.value.length
      counter.textContent = `${textArea.maxLength - textLength}/ ${
        textArea.maxLength
      }`
    })
  })

  const form = getByDataJs('form')
  const firstInput = document.querySelector('#question-input')

  form.addEventListener('submit', event => {
    event.preventDefault()
    form.reset()
    firstInput.focus()
    sections.forEach(section => {
      const textArea = getAllByDataJs('create__textarea', section)
      const counter = getAllByDataJs('create__letter-count', section)
      counter.textContent = `${textArea.maxLength}/ ${textArea.maxLength}`
    })
  })
}

/* 
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

    */
