const ageContainer = document.querySelector("#age");

function currentAge(yearOfBirth) {
  const today = new Date().getFullYear();
  const birthYear = new Date(yearOfBirth);
  const age = today - birthYear;
  ageContainer.innerText = age;
}

currentAge(1996);

const rainydaysCard = document.querySelector(".rainydays");
const cmsCard = document.querySelector(".CMS");
const techpostCard = document.querySelector(".techpost");

const rainydays = "rainydays";
const cms = "cms";
const techpost = "techpost";

rainydaysCard.addEventListener("click", () => {
  cmsCard.classList.remove("active");
  techpostCard.classList.remove("active");
  rainydaysCard.classList.add("active");
  renderSelectedProject(rainydays);
});

cmsCard.addEventListener("click", () => {
  cmsCard.classList.add("active");
  techpostCard.classList.remove("active");
  rainydaysCard.classList.remove("active");
  renderSelectedProject(cms);
});

techpostCard.addEventListener("click", () => {
  cmsCard.classList.remove("active");
  techpostCard.classList.add("active");
  rainydaysCard.classList.remove("active");
  renderSelectedProject(techpost);
});

function renderSelectedProject(project) {
  let selectedImage = document.querySelector(".selectedImage");
  let selectedTitle = document.querySelector(".selectedTitle");
  let selectedText = document.querySelector(".selectedText");

  selectedImage.src = document.querySelector("." + project + "Image").src;
  selectedTitle.innerText = document.querySelector(
    "." + project + "Heading"
  ).innerText;
  selectedText.innerText = document.querySelector(
    "." + project + "Text"
  ).innerText;
}
