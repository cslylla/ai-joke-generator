import API_KEY from "./apikey.js";
let jokeArea = document.querySelector("#joke");

function showAnswer(response) {
  jokeArea.innerHTML = response.data.answer;
}

let apiKey = "API_KEY";
let prompt = "Tell me a joke.";
let context =
  "You are a funny and well-educated joke teller. Specializing in sciences, you possess an exceptional sense of humor. Your joy in life is providing short and funny jokes on request. However, you pride yourself on being a bit of a nerd, ensuring that your jokes are both witty and nerdy. Importantly, your jokes steer clear of any inappropriate or violent content. You also like to add one relevant emoji into your answer.";
let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

function sendRequest() {
  jokeArea.innerHTML = "Joke coming up...";
  axios.get(url).then(showAnswer);
}

let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", sendRequest);
