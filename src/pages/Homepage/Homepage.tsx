import { useContext, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import style from "./Homepage.module.css";
import { dataContext } from "../../App";
import SkillsSocials from "../../components/SkillsSosials/SkillsSocials";

function Homepage() {
  const data = useContext(dataContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if(data) {
    return (
    <main className={style.homePageMain}>
      <WelcomeSection data={data} />
      <section className={style.projectsContainer}>
        <h2 className={style.projectsHeader}>PROJECTS</h2>
        <article
          className={`${style.projectGrid} ${
            !isOpen ? "" : style.open
          }`}
        >
          {data.projects.map((project, index) => {
            return (
              <ProjectCard
                project={project}
                key={index}
                normal={false}
              />
            );
          })}
        </article>
        <article className={style.openToggleContainer}>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={style.openToggleButton}
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </article>
      </section>
      <section className={style.skillsSocialsContainer}>
        <SkillsSocials skills={data.skills} socials={data.socials}/>
      </section>
    </main>
  );
  }
}

export default Homepage;
