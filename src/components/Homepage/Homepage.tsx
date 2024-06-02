import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";

type Response = {
  "info": {
    "name": string,
    "description": string,
    "picture": string,
  },
  "skills": {
    "design": [
      {
        "skill": string,
        "logo": String,
        "link": string
      }
    ],
    "testing": [
      {
        "skill": string,
        "logo": string,
        "link": string
      }
    ],
    "coding": [
      {
        "skill": string,
        "logo": string,
        "link": string
      }
    ]
  },
  "projects": [
    {
      "title": string,
      "description": string,
      "github": string,
      "link": string,
      "tech": [
        {
          "skill": string
        },
        {
          "skill": string
        },
        {
          "skill": string
        }
      ]
    }
  ]
}

function Homepage() {
  const [data, setData] = useState<Response | null>(null);
  useEffect(() => {
    async function fetchData() {
      const getData = await fetch("/src/fakeAPI/API.json");
      const response = await getData.json();
      setData(response);
    }
    fetchData();
  }, [])

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
            <p>{data?.info.description}</p>
          </div>
          <img src="/src/assets/Selfie.jpg" className={styles.image} />
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
                return(
                  <li>{project.title}</li>
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
