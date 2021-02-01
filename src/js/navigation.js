import getByDataJs from '../js/getByDataJs.js'

export default function navigation() {
  const button1 = getByDataJs('buttonHome')
  const button2 = getByDataJs('buttonBookmark')
  const button3 = getByDataJs('buttonCreate')
  const button4 = getByDataJs('buttonSettings')

  const page1 = getByDataJs('pageHome')
  const page2 = getByDataJs('pageBookmark')
  const page3 = getByDataJs('create')
  const page4 = getByDataJs('pageSettings')

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
}
