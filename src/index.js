function generatePoem(event){
  // Preventing default behavior for the submit event
  event.preventDefault();

  // Adding Typewriter.js effect to the generated poem
  new Typewriter('#poem', {
    strings: "Por qué corre lento el río.",
    autoStart: true,
    delay: 1,
    cursor: ""
  });
  
}

// Handling form input and behavior
let poemGeneratorFormElement = document.querySelector("#poem-generator-form")
poemGeneratorFormElement.addEventListener("submit", generatePoem)