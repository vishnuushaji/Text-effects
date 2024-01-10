const containerEl = document.querySelector(".container");

const careers = ["Web Developer", "Freelancer"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  const currentCareer = careers[careerIndex];
  const indefiniteArticle = currentCareer[0] === "I" ? "am" : "a";

  containerEl.innerHTML = `<h1>I am ${indefiniteArticle} ${currentCareer.substring(0, characterIndex)}</h1>`;

  characterIndex++;

  if (characterIndex > currentCareer.length) {
    characterIndex = 0;
    careerIndex = (careerIndex + 1) % careers.length;
  }

  setTimeout(updateText, 600);
}
