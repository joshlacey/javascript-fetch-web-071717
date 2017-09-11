const app = "I don't do much.";

const token = '3af0255e6e8032de510d3bb6ae2be3a8e33c57bc'
let jsonVar
document.addEventListener('DOMContentLoaded', function () {
  fetchJSON()

})

function fetchJSON() {
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(addElementsToPage);
}


function addElementsToPage(elements) {
  let main = document.getElementById('main')
  main.innerHTML = elements.reduce((html, element)=> (html + `<p>${element.full_name}</p>`), "")
}
