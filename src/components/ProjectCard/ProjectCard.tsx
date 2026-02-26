import { useNavigate } from "react-router";
import style from "./ProjectCard.module.css";

type ProjectResponse = {
  title: string;
  description: string;
  github: string;
  tag: string[];
  image_url: string;
  link: string;
  mainColor: string;
  buttonColor: string;
  tech: [
    {
      skill: string;
    },
  ];
};

function ProjectCard({
  project,
  normal = true,
}: {
  project: ProjectResponse;
  normal?: boolean;
}) {
  const navigate = useNavigate();

  console.log(project.tag);

  if (normal) {
    return (
      <div
        key={project.title}
        className={style.projectCard}
        onClick={() => {
          navigate(`/${project.title}`);
        }}
      >
        <div className={style.imageContainer}>
          <img
            src={project.image_url}
            alt={project.title}
            className={style.projectImage}
          />
          <div className={style.overlay}>
            {project.tag.map((tag, index) => (
              <span key={index} className={style.tagStyle}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={style.projectContent}>
          <h2 className={style.projectTitle}>{project.title}</h2>
          <p className={style.projectDescription}>
            {project.description.substring(0, 120)}...
          </p>

          <div className={style.techStack}>
            {project.tech?.map((tech, i) => (
              <span key={i} className={style.techBadge}>
                {tech.skill}
              </span>
            ))}
          </div>

          <div className={style.buttonGroup}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={style.btnPrimary}
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={style.btnSecondary}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      key={project.title}
      className={style.projectCardHome}
      onClick={() => {
        navigate(`/${project.title}`);
      }}
    >
      <div className={style.imageContainer}>
        <img
          src={project.image_url}
          alt={project.title}
          className={style.projectImage}
        />
        <div className={style.overlay}>
          {project.tag.map((tag, i) => (
            <span key={i} className={style.techBadge}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={style.projectContent}>
        <h2 className={style.projectTitle}>{project.title}</h2>

        <div className={style.buttonGroup}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={style.btnPrimary}
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={style.btnSecondary}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
