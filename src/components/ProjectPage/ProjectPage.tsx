import { useState } from "react";
import { Page, Response, defaultPage } from "../../App";
import styles from "./ProjectPage.module.css";

type ProjectPage = {
  currentPage: Page,
  data: Response | null,
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>,
  setActiveAnimation: React.Dispatch<React.SetStateAction<boolean>>,
  setOverflow: React.Dispatch<React.SetStateAction<boolean>>
}

function ProjectPage({currentPage, data, setCurrentPage, setActiveAnimation, setOverflow} : ProjectPage) {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  
  const filteredData = data?.projects.filter((project) => project.title === currentPage.page);

  function changeFullscreen() {
    window.scrollTo(0,0);
    setIsFullScreen(!isFullScreen);
  }

  function setPage() {
    setActiveAnimation(true);
    setOverflow(true);

    setTimeout(() => {
      setCurrentPage(defaultPage);
      setActiveAnimation(false);
    }, 500);

    setTimeout(() => {
      setOverflow(false)
    }, 1000);
  }

  if(filteredData) {
    return(
      <section className={styles.projectContainer}>
        <nav className={styles.topNav}>
          <button type="button" onClick={setPage} title="Back Button" aria-label="Back Button"></button>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://www.linkedin.com/in/sindre-str%C3%B8ms%C3%A6ther-der%C3%A5s-212353249/"
                id={styles.linkedin}
                aria-label="Linkedin"
              ></a>
            </li>
            <li>
              <a href="mailto:sinder009@gmail.com" id={styles.mail} aria-label="Mail"></a>
            </li>
            <li>
              <a href="https://github.com/ESPR07" id={styles.github} aria-label="Github"></a>
            </li>
          </ul>
        </nav>
        <article className={styles.projectInfo}>
          <h1>{filteredData[0].title}</h1>
          <div className={styles.iframeContainer} id={isFullScreen? styles.fullScreen : ""}>
            <iframe src={filteredData[0].link} className={isFullScreen? styles.fullScreen : ""}/>
            <button type="button" className={`${styles.fullscreenButton} ${isFullScreen? styles.buttonMinus : styles.buttonPlus}`} onClick={changeFullscreen} title="Fullscreen Button" aria-label="Fullscreen Button"></button>
            <a href={filteredData[0].github} target="_blank"><button type="button" className={styles.githubButton} title="Open Github" aria-label="Open Github"></button></a>
          </div>
          <section className={styles.bottomSection}>
            <p>{filteredData[0].description}</p>
            <article className={styles.projectStackContainer}>
            <h2>Tech Stack</h2>
            <ul className={styles.stackList}>
              {filteredData[0].tech.map((tech) => {
                return(
                  <li key={tech.skill}>{tech.skill}</li>
                )
              })}
            </ul>
          </article>
          </section>
        </article>
      </section>
    )
  }
}

export default ProjectPage;