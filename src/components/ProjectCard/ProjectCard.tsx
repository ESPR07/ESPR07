import { Link } from "react-router";
import { useRef } from "react";
import style from "./ProjectCard.module.css";

function ProjectCard({ title, tag, link, imageUrl }: any) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    // Calculate mouse position relative to card center
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate angle and distance from center
    const deltaX = mouseX - cardCenterX;
    const deltaY = mouseY - cardCenterY;

    // Calculate border gradient based on mouse position
    // Create a gradient that's brighter on the side opposite to the mouse
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    const oppositeAngle = angle + 180;

    // Update CSS custom properties
    cardRef.current.style.setProperty("--border-angle", `${oppositeAngle}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--border-angle", "0deg");
  };

  return (
    <article
      ref={cardRef}
      className={style.cardContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img className={style.projectImage} src={imageUrl} />
      <div className={style.heightWrapper}>
        <div className={style.cardInfo}>
          <h3>{title}</h3>
          <p>{tag}</p>
        </div>
        <div className={style.buttonsWrapper}>
          <Link to={link} target="_blank">
            Live Site
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
