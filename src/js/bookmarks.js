import getAllByDataJs from '../js/getAllByDataJs.js'

export default function bookmarks() {
  const bookmarks = getAllByDataJs('bookmark')

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('fa')
    })
  })
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
