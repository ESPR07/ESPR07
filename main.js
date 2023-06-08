/*Age Calculation*/
const ageContainer = document.querySelector("#age");

function currentAge(yearOfBirth) {
  const today = new Date().getFullYear();
  const birthYear = new Date(yearOfBirth);
  const age = today - birthYear;
  ageContainer.innerText = age;
}

currentAge(1996);

/*HTML rendering*/
import { projects } from "./components/projectContent.js";

const cardContainer = document.querySelector(".cardContainer");
const selectedProject = document.querySelector(".selectedProject");

function renderCards(array) {
  array.forEach(({ name, shortName, image, alt, shortContent }) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("default");
    cardDiv.classList.add("projectCard");
    cardDiv.classList.add(shortName);
    cardContainer.append(cardDiv);

    const cardImage = document.createElement("img");
    cardImage.src = image;
    cardImage.alt = alt;
    cardDiv.append(cardImage);

    const cardHeader = document.createElement("h3");
    cardHeader.innerText = name;
    cardDiv.append(cardHeader);

    const cardShortContent = document.createElement("p");
    cardShortContent.innerText = shortContent;
    cardDiv.append(cardShortContent);
  });
}

function renderCurrent(array) {
  const currentImage = document.createElement("img");
  currentImage.src = array.image;
  currentImage.alt = array.alt;
  currentImage.classList.add("selectedImage");
  selectedProject.append(currentImage);

  // const embedBrowser = document.createElement("iframe");
  // embedBrowser.classList.add("selectedImage");
  // embedBrowser.src = array.liveSite;
  // selectedProject.append(embedBrowser);

  const currentHeader = document.createElement("h3");
  currentHeader.innerText = array.name;
  currentHeader.classList.add("selectedTitle");
  selectedProject.append(currentHeader);

  const currentText = document.createElement("p");
  currentText.innerText = array.content;
  currentText.classList.add("selectedText");
  selectedProject.append(currentText);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonContainer");
  selectedProject.append(buttonDiv);

  const repoButton = document.createElement("a");
  repoButton.innerText = "Repository";
  repoButton.href = array.repository;
  repoButton.title = "Link to the repository";
  buttonDiv.append(repoButton);

  const liveButton = document.createElement("a");
  liveButton.innerText = "Live Site";
  liveButton.href = array.liveSite;
  liveButton.title = "Link to the Live Site";
  buttonDiv.append(liveButton);
}

function renderHTML() {
  renderCards(projects);
  renderCurrent(projects[0]);
}

renderHTML();

/*Click Events*/
const rainydaysCard = document.querySelector(".rainydays");
const cmsCard = document.querySelector(".cms");
const techpostCard = document.querySelector(".techpost");
const arrow = document.querySelector(".arrowButton");
const xIcon = document.querySelector(".xIcon");
const contactImage = document.querySelector(".contactImage");
const contactModal = document.querySelector(".contactModal");

rainydaysCard.addEventListener("click", () => {
  cmsCard.classList.remove("active");
  cmsCard.classList.remove("default");
  techpostCard.classList.remove("active");
  techpostCard.classList.remove("default");
  rainydaysCard.classList.add("active");
  selectedProject.innerHTML = "";
  renderCurrent(projects[0]);
});

cmsCard.addEventListener("click", () => {
  cmsCard.classList.add("active");
  techpostCard.classList.remove("active");
  techpostCard.classList.remove("default");
  rainydaysCard.classList.remove("active");
  rainydaysCard.classList.remove("default");
  selectedProject.innerHTML = "";
  renderCurrent(projects[1]);
});

techpostCard.addEventListener("click", () => {
  cmsCard.classList.remove("active");
  cmsCard.classList.remove("default");
  techpostCard.classList.add("active");
  rainydaysCard.classList.remove("active");
  rainydaysCard.classList.remove("default");
  selectedProject.innerHTML = "";
  renderCurrent(projects[2]);
});

arrow.addEventListener("click", () => {
  let destination = document.querySelector(".projects");

  destination.scrollIntoView();
});

xIcon.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

contactImage.addEventListener("click", () => {
  contactModal.showModal();
});

contactModal.addEventListener("click", (closeModal) => {
  const modalDimensions = contactModal.getBoundingClientRect();
  if (
    closeModal.clientX < modalDimensions.left ||
    closeModal.clientX > modalDimensions.right ||
    closeModal.clientY < modalDimensions.top ||
    closeModal.clientY > modalDimensions.bottom
  ) {
    contactModal.close();
  }
});
