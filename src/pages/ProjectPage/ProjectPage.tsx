import { useContext, useState } from "react";
import styles from "./ProjectPage.module.css";
import { dataContext } from "../../App";
import { useNavigate, useParams } from "react-router";
import FullScreenIcon from "../../components/SVGComponents/FullScreenIcon";
import GithubIcon from "../../components/SVGComponents/GithubIcon";

function ProjectPage() {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const data = useContext(dataContext);
  const navigate = useNavigate();

  const { id } = useParams();

  const filteredData = data?.projects.filter((project) => project.title === id);

  function changeFullscreen() {
    window.scrollTo(0, 0);
    setIsFullScreen(!isFullScreen);
  }

  if (filteredData) {
    return (
      <>
        <title>{`${filteredData[0].title} | Sindre Strømsæther Derås`}</title>
        <meta name="description" content={`This is the info about ${filteredData[0].title}`}/>
        <section className={styles.projectContainer}>
          <nav className={styles.topNav}>
            <button
              type="button"
              title="Back Button"
              onClick={() => {
                navigate("/");
              }}
              aria-label="Back Button"
            ></button>
          </nav>
          <article className={styles.projectInfo}>
            <h1>{filteredData[0].title}</h1>
            <div
              className={styles.iframeContainer}
              id={isFullScreen ? styles.fullScreen : ""}
            >
              <iframe
                src={filteredData[0].link}
                className={isFullScreen ? styles.fullScreen : ""}
              />
              <button
                type="button"
                className={`${styles.fullscreenButton}`}
                onClick={changeFullscreen}
                title="Fullscreen Button"
                aria-label="Fullscreen Button"
              > <FullScreenIcon isFullScreen={isFullScreen}/></button>
              <a href={filteredData[0].github} target="_blank">
                <button
                  type="button"
                  className={styles.githubButton}
                  title="Open Github"
                  aria-label="Open Github"
                ><GithubIcon/></button>
              </a>
            </div>
            <section className={styles.bottomSection}>
              <p>{filteredData[0].description}</p>
              <article className={styles.projectStackContainer}>
                <h2>Tech Stack</h2>
                <ul className={styles.stackList}>
                  {filteredData[0].tech.map((tech) => {
                    return <li key={tech.skill}>{tech.skill}</li>;
                  })}
                </ul>
              </article>
            </section>
          </article>
        </section>
      </>
    );
  }
}

export default ProjectPage;
