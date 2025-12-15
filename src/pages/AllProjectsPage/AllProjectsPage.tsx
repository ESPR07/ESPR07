import { useContext } from "react";
import styles from "./AllProjectsPage.module.css";
import { dataContext } from "../../App";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function AllProjectsPage() {
  const data = useContext(dataContext);

  return (
    <>
      <title>All Projects | Sindre Strømsæther Derås</title>
      <meta name="description" content="All the project I'd like to show"/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>MY PROJECTS</h1>
            <p className={styles.subtitle}>
              A collection of my work showcasing various technologies and skills
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {data?.projects?.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProjectsPage;
