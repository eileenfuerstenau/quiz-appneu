console.log('hello world')

const button1 = document.querySelector('[data-js=buttonHome]')
const button2 = document.querySelector('[data-js=buttonBookmark]')
const button3 = document.querySelector('[data-js=buttonCreate]')
const button4 = document.querySelector('[data-js=buttonSettings]')

const page1 = document.querySelector('[data-js=pageHome]')
const page2 = document.querySelector('[data-js=pageBookmark]')
const page3 = document.querySelector('[data-js=pageCreate]')
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
