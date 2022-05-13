import './style.css'

//functie care creeaza comentariul
function createComment(text){
  let itemHTML = document.createElement("li")
  itemHTML.innerHTML = text

  //email si poza
  let email = document.createElement("p")
  email.innerHTML = "florin.popescu@gmail.com"
  itemHTML.appendChild(email)
  
  let photo = document.createElement("img")
  photo.src = "image.jpg"
  itemHTML.appendChild(photo)

  //buton delete
  var buttonHTML = document.createElement("button")
  buttonHTML.data = "Va sterge";
  buttonHTML.innerHTML = "Delete";
  buttonHTML.setAttribute("class", "delete-buttons")
  itemHTML.appendChild(buttonHTML)
  buttonHTML.addEventListener('click', function(event){
      itemHTML.parentElement.removeChild(itemHTML);
  })

  itemHTML.insertBefore(email, itemHTML.firstChild)
  itemHTML.insertBefore(photo, itemHTML.firstChild)

  return itemHTML
}

//1.displayComments 
//Afisam comentariile
var commentList=["first comment", "second comment"];

// function displayComments(){
var ulHTML = document.createElement("ul")
for(let i = 0; i < commentList.length; i++){
  let commentValue = commentList[i];
  let itemHTML = createComment(commentValue);
  ulHTML.appendChild(itemHTML)
}
//Le punem in body
document.body.appendChild(ulHTML)



//2. Permitem adaugarea unui comentariu
var inputComment = document.getElementById("inputId");
var addButton = document.getElementById("addButton");

addButton.onclick = function(){
  console.log(inputComment.value)
  let itemNou= createComment(inputComment.value);
  ulHTML.appendChild(itemNou)
}


// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
