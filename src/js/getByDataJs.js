export default function getByDataJs(dataJsName, target = document) {
  return target.querySelector(`[data-js="${dataJsName}"]`)
}

/*

function getElement(nameJS) {
  return document.querySelector(`[data-js="${nameJS}"]`)
} 
*/
