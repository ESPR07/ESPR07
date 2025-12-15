import { Link } from "react-router";
import style from "./SkillsSocials.module.css";

type SkillItem = {
  skill: string;
  logo: string;
  link: string;
};

type Skills = {
  design: SkillItem[];
  testing: SkillItem[];
  coding: SkillItem[];
};

type Socials = {
  Linkedin: string;
  Github: string;
  Email: string;
};

function SkillsSocials({
  skills,
  socials,
}: {
  skills: Skills;
  socials: Socials;
}) {
  return (
    <>
      <article className={style.skillsContainer}>
        <h2>Tech Stack</h2>
        <div className={style.designContainer}>
          <h3>Design and Research</h3>
          <div className={style.designList}>
            {skills.design.map((skill) => (
              <a
                key={skill.skill}
                target="_blank"
                rel="noopener noreferrer"
                href={skill.link}
                style={{ backgroundImage: `url("${skill.logo}")` }}
                aria-label={skill.skill}
              />
            ))}
          </div>
        </div>
        <div className={style.codingContainer}>
          <h3>Coding</h3>
          <div className={style.codingList}>
            {skills.coding.map((skill) => (
              <a
                key={skill.skill}
                target="_blank"
                rel="noopener noreferrer"
                href={skill.link}
                style={{ backgroundImage: `url("${skill.logo}")` }}
                aria-label={skill.skill}
              />
            ))}
          </div>
        </div>
        <div className={style.testingContainer}>
          <h3>Testing & Hosting</h3>
          <div className={style.testingList}>
            {skills.testing.map((skill) => (
              <a
                key={skill.skill}
                target="_blank"
                rel="noopener noreferrer"
                href={skill.link}
                style={{ backgroundImage: `url("${skill.logo}")` }}
                aria-label={skill.skill}
              />
            ))}
          </div>
        </div>
      </article>
      <article className={style.socialsContainer}>
        <h2>Socials</h2>
        <Link to={socials.Linkedin} target="_blank">Linkedin</Link>
        <Link to={socials.Github} target="_blank">Github</Link>
        <Link to={socials.Email} target="_blank">Send Me Mail</Link>
      </article>
    </>
  );
}

export default SkillsSocials;
