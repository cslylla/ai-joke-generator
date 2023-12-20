let jokeArea = document.querySelector("#joke");

function sendRequest() {
  jokeArea.innerHTML = "Joke coming up...";
}

let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", sendRequest);
