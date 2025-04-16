function generatePoem(response){
  // Adding Typewriter.js effect to the generated poem
  console.log(response.data.answer)
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: ""
  });
}

function handleApiRequest(event){
  // Preventing default behavior for the submit event
  event.preventDefault();

  // Storing user input
  let themeInputElement = document.querySelector("#theme-input");
  let theme = themeInputElement.value;

  // Handling AI API behaviour
  let aiApiKey = "424369doa037d0347bft3cfcc8cef956";
  let aiPrompt = `Please generate a fantasy Spanish poem about ${theme} in HTML format in exactly 4 verses, separating each line with a <br/> and adding ✨ at the beginning of each line. Make sure to sign the poem at the end by adding a <br/>, and in a <strong> element add — SheCodes AI. Do not mention HTML or wrap the poem in code blocks. Only return the raw HTML for the poem. Remember your limit is 4 verses. Thank you!`;
  let aiContext = "You are a passionate fantasy writer who specializes in poetry of 4 verses. You take every challenge as an opportunity to portrait your creativity.";
  let aiApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${aiContext}&key=${aiApiKey}`;

  let poemContainerElement = document.querySelector("#poem-container");
  poemContainerElement.classList.remove("hidden");

  
  document.querySelector("#poem").innerHTML = "<div class='blink'>⏳ Generating poem. Please wait...</div>";

  axios.get(aiApiUrl).then(generatePoem);
}

// Handling form input and behavior
let poemGeneratorFormElement = document.querySelector("#poem-generator-form");
poemGeneratorFormElement.addEventListener("submit", handleApiRequest);
