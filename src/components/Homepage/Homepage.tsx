import styles from "./Homepage.module.css";
import { Page, Response } from "../../App";
import SkillSection from "../SkillSection/SkillSection";
import { motion } from "framer-motion";

type Homepage = {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  data: Response | null;
  setActiveAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setOverflow: React.Dispatch<React.SetStateAction<boolean>>;
};

type Value = {
  page: string;
  theme: {
    pageColor: string;
    buttonColor: string;
  };
};

function Homepage({
  setCurrentPage,
  data,
  setActiveAnimation,
  setOverflow,
}: Homepage) {
  function setPage(value: Value) {
    setActiveAnimation(true);
    setOverflow(true);

    setTimeout(() => {
      setCurrentPage(value);
      setActiveAnimation(false);
    }, 500);

    setTimeout(() => {
      setOverflow(false);
    }, 1000);
  }

  const description = data?.info.description;

  return (
    <section className={styles.homepageContainer}>
      <nav>
        <ul className={styles.socials}>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sindre-str%C3%B8ms%C3%A6ther-der%C3%A5s-212353249/"
              id={styles.linkedin}
              aria-label="Linkedin"
            >
              <span className={styles.srOnly}>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="mailto:sindre.stromsaether@gmail.com"
              id={styles.mail}
              aria-label="Mail"
            >
              <span className={styles.srOnly}>Mail</span>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/ESPR07"
              id={styles.github}
              aria-label="Github"
            >
              <span className={styles.srOnly}>Github</span>
            </a>
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
            {description?.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <img
            src="/images/selfie.webp"
            className={styles.image}
            alt="Selfie of me"
            loading="lazy"
          />
        </header>
        <section className={styles.skillsLinksContainer}>
          <article className={styles.skillsContainer}>
            <h2>Skills</h2>
            <SkillSection
              title="Design & Research"
              skills={data?.skills.design ?? []}
            />
            <SkillSection
              title="Testing & Hosting"
              skills={data?.skills.testing ?? []}
            />
            <SkillSection title="Coding" skills={data?.skills.coding ?? []} />
          </article>
          <article className={styles.projectLinksContainer}>
            <h2>Project Spotlight</h2>
            <ul className={styles.projectList}>
              {data?.projects.map((project) => {
                const newPage = {
                  page: project.title,
                  theme: {
                    pageColor: project.mainColor,
                    buttonColor: project.buttonColor,
                  },
                };

                return (
                  <motion.li
                    key={project.title}
                    className={styles.projectItem}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setPage(newPage);
                    }}
                  >
                    <div className={styles.projectInfo}>
                      <h3>{project.title}</h3>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Homepage;
