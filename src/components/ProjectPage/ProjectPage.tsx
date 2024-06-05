import { useState } from "react";
import { Page, Response, defaultPage } from "../../App";
import styles from "./ProjectPage.module.css";

function ProjectPage({currentPage, data, setCurrentPage} : {currentPage: Page, data: Response | null, setCurrentPage: React.Dispatch<React.SetStateAction<Page>>}) {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  console.log(isFullScreen);
  
  const filteredData = data?.projects.filter((project) => project.title === currentPage.page);

  function changeFullscreen() {
    setIsFullScreen(!isFullScreen);
  }

  if(filteredData) {
    return(
      <section className={styles.projectContainer}>
        <nav className={styles.topNav}>
          <button type="button" onClick={() => {setCurrentPage(defaultPage)}}></button>
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
            <button type="button" className={`${styles.fullscreenButton} ${isFullScreen? styles.buttonMinus : styles.buttonPlus}`} onClick={() => {changeFullscreen()}}></button>
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