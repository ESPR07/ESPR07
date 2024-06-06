import styles from "./Homepage.module.css";
import { Page, Response } from "../../App";

type Homepage = {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>,
  data: Response | null,
  setActiveAnimation: React.Dispatch<React.SetStateAction<boolean>>,
  setOverflow: React.Dispatch<React.SetStateAction<boolean>>
}

type Value = {
  page: string,
    theme: {
      pageColor: string,
      buttonColor: string
    }
}

function Homepage({setCurrentPage, data, setActiveAnimation, setOverflow} : Homepage) {

  function setPage(value: Value) {
    setActiveAnimation(true);
    setOverflow(true);

    setTimeout(() => {
      setCurrentPage(value);
      setActiveAnimation(false);
    }, 500);

    setTimeout(() => {
      setOverflow(false)
    }, 1000);
  }

  const description = data?.info.description;
  const formattedDescription = description ? description.replace(/\n/g, '<br><br>') : '';

  return (
    <section className={styles.homepageContainer}>
      <nav>
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
      <div className={styles.infoContainer}>
        <header className={styles.infoTextImage}>
          <h1>Welcome!</h1>
          <div className={styles.textWithBorder}>
            <p>
              My name is <br /> <strong>{data?.info.name}</strong>
            </p>
            <p dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
          </div>
          <img src="/src/assets/selfie.webp" className={styles.image} alt="Selfie of me"/>
        </header>
        <section className={styles.skillsLinksContainer}>
          <article className={styles.skillsContainer}>
            <h2>Skills</h2>
            <section className={styles.designContainer}>
              <h3>Design & Research</h3>
              <div className={styles.designGrid}>
                {data?.skills.design.map((skill) => {
                  return(
                    <a
                      target="_blank"
                      href={skill.link}
                      style={{ backgroundImage: `url("${skill.logo}")` }}
                      aria-label={skill.skill}
                    />
                  )
                })}
              </div>
            </section>
            <section className={styles.hostingContainer}>
              <h3>Testing & Hosting</h3>
              <div className={styles.hostingGrid}>
                {data?.skills.testing.map((skill) => {
                  return(
                    <a
                      target="_blank"
                      href={skill.link}
                      style={{ backgroundImage: `url("${skill.logo}")` }}
                      aria-label={skill.skill}
                    />
                  )
                })}
              </div>
            </section>
            <section className={styles.codingContainer}>
              <h3>Coding</h3>
              <div className={styles.codingGrid}>
                {data?.skills.coding.map((skill) => {
                  return(
                    <a target="_blank" href={skill.link} style={{backgroundImage: `url("${skill.logo}")`}} aria-label={skill.skill}/>
                  )
                })}
              </div>
            </section>
          </article>
          <article className={styles.projectLinksContainer}>
            <h2>Projects</h2>
            <ul className={styles.projectList}>
              {data?.projects.map((project) => {
                const newPage = {
                  page: project.title,
                  theme: {
                    pageColor: project.mainColor,
                    buttonColor: project.buttonColor
                  }
                }
                return(
                  <li value={project.title} onClick={() => {setPage(newPage)}}>{project.title}</li>
                )
              })}
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Homepage;
