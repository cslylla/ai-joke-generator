import API_KEY from "./apikey.js";
let jokeArea = document.querySelector("#joke");
let textArea = document.querySelector("#text");
let afterTextArea = document.querySelector("#afterText");

function typewriter(location, text) {
  var typeText = new Typewriter(location, {
    loop: false,
    delay: 30,
    cursor: "",
  });

  return typeText.start().typeString(text);
}

function typewriterLoop(location, text) {
  var typeLoop = new Typewriter(location, {
    loop: true,
    delay: 250,
    deleteSpeed: 10,
    cursor: "",
  });

  return typeLoop.start().typeString(text).deleteAll();
}

// API call
let apiKey = API_KEY;
let prompt = "Tell me a new nerdy joke.";
let context =
  "You are a funny and well-educated joke teller. Specializing in sciences, you possess an exceptional sense of humor. Your joy in life is providing short and funny jokes on request. However, you pride yourself on being a bit of a nerd, ensuring that your jokes are both witty and nerdy. Importantly, your jokes steer clear of any inappropriate or violent content. You also like to add one relevant emoji into your answer. Write the answer in HTML. For example: <p>Why don't scientists trust atoms?</p><p>Because they make up everything! 🤓⚛</p>";
let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

// Button click
async function sendRequest(event) {
  event.preventDefault();
  // "Loader"
  typewriter(textArea, "Joke is coming up");
  typewriterLoop(afterTextArea, "<b>. . .</b>");

  try {
    const response = await axios.get(url);
    // Once the response is available, remove the "Processing ..." message and print the joke
    afterTextArea.textContent = "";
    typewriter(textArea, response.data.answer);
  } catch (error) {
    jokeArea.innerHTML =
      "😨 Ups... the joke was too funny to be displayed, here is an error message for you instead:<br><br><b>" +
      error.message +
      "😭</b>";
  }
}

let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", sendRequest);
