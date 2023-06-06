const ageContainer = document.querySelector("#age");

function currentAge(yearOfBirth) {
  const today = new Date().getFullYear();
  const birthYear = new Date(yearOfBirth);
  const age = today - birthYear;
  ageContainer.innerText = age;
}

currentAge(1996);

const rainydaysLive = "https://rainydays-test-espr.netlify.app/";
const cmsLive = "https://noroff-semester-project-1-sindre.netlify.app/";
const techpostLive = "https://techpost-projectexam.netlify.app/";

const rainydaysRepo =
  "https://github.com/ESPR07/Cross-Course-Assignment-Noroff";
const cmsRepo = "https://github.com/ESPR07/Noroff-Semester-Project-1";
const techpostRepo = "https://github.com/ESPR07/Project-Exam-1";

const rainydaysCard = document.querySelector(".rainydays");
const cmsCard = document.querySelector(".CMS");
const techpostCard = document.querySelector(".techpost");

rainydaysCard.addEventListener("click", () => {
  cmsCard.classList.remove("active");
  techpostCard.classList.remove("active");
  rainydaysCard.classList.add("active");
  renderSelectedProject("rainydays", rainydaysRepo, rainydaysLive);
});

cmsCard.addEventListener("click", () => {
  cmsCard.classList.add("active");
  techpostCard.classList.remove("active");
  rainydaysCard.classList.remove("active");
  renderSelectedProject("cms", cmsRepo, cmsLive);
});

techpostCard.addEventListener("click", () => {
  cmsCard.classList.remove("active");
  techpostCard.classList.add("active");
  rainydaysCard.classList.remove("active");
  renderSelectedProject("techpost", techpostRepo, techpostLive);
});

function renderSelectedProject(project, repo, liveSite) {
  let selectedImage = document.querySelector(".selectedImage");
  let selectedTitle = document.querySelector(".selectedTitle");
  let selectedText = document.querySelector(".selectedText");
  const repoButton = document.querySelector(".repoButton");
  const liveButton = document.querySelector(".liveButton");

  selectedImage.src = document.querySelector("." + project + "Image").src;
  selectedImage.alt = "Screenshot of project";
  selectedTitle.innerText = document.querySelector(
    "." + project + "Heading"
  ).innerText;
  selectedText.innerText = document.querySelector(
    "." + project + "Text"
  ).innerText;

  repoButton.href = repo;
  repoButton.title = "Link to the repository";
  liveButton.href = liveSite;
  liveButton.title = "Link to the Live Site";
}
