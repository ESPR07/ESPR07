import styles from "./SkillSection.module.css"

function SkillSection({ title, skills }: { title: string, skills: { link: string, logo: string, skill: string }[] }) {
  return (
    <section className={styles.skillCategory}>
      <h3>{title}</h3>
      <div className={styles.skillGrid}>
        {skills.map(skill => (
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
    </section>
  );
}

export default SkillSection;