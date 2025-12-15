import { useContext } from "react";
import styles from "./AboutMe.module.css";
import { dataContext } from "../../App";

function AboutMe() {
  const data = useContext(dataContext);

  return (
    <>
      <title>About Me | Sindre Strømsæther Derås</title>
      <meta name="description" content="A little info about me"/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>ABOUT ME</h1>
            <p className={styles.subtitle}>Get to know me better</p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.profileSection}>
              <div className={styles.imageWrapper}>
                <img
                  src={"/assets/images/selfie.webp"}
                  alt={"Picture of me"}
                  className={styles.profileImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              <div className={styles.profileInfo}>
                <h2 className={styles.name}>{data?.info?.name}</h2>
                <p className={styles.role}>Creative Developer</p>

                <div className={styles.socials}>
                  {data?.socials &&
                    Object.entries(data.socials).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        {platform}
                      </a>
                    ))}
                </div>
              </div>
            </div>

            <div className={styles.descriptionSection}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>My Journey</h3>
                <p className={styles.description}>{data?.info?.description}</p>
              </div>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>My Skills</h2>

            <div className={styles.skillsGrid}>
              {data?.skills?.coding && (
                <div className={styles.skillCategory}>
                  <h3 className={styles.categoryTitle}>Development</h3>
                  <div className={styles.skillsList}>
                    {data.skills.coding.map((skill, index) => (
                      <div key={index} className={styles.skillItem}>
                        <div className={styles.skillIcon}>
                          <img
                            src={skill.logo}
                            alt={skill.skill}
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                        <span className={styles.skillName}>{skill.skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data?.skills?.design && (
                <div className={styles.skillCategory}>
                  <h3 className={styles.categoryTitle}>Design & Tools</h3>
                  <div className={styles.skillsList}>
                    {data.skills.design.map((skill, index) => (
                      <div key={index} className={styles.skillItem}>
                        <div className={styles.skillIcon}>
                          <img
                            src={skill.logo}
                            alt={skill.skill}
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                        <span className={styles.skillName}>{skill.skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data?.skills?.testing && (
                <div className={styles.skillCategory}>
                  <h3 className={styles.categoryTitle}>Testing & Deployment</h3>
                  <div className={styles.skillsList}>
                    {data.skills.testing.map((skill, index) => (
                      <div key={index} className={styles.skillItem}>
                        <div className={styles.skillIcon}>
                          <img
                            src={skill.logo}
                            alt={skill.skill}
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                        <span className={styles.skillName}>{skill.skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Let's Work Together</h2>
            <p className={styles.ctaText}>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className={styles.ctaButtons}>
              {data?.socials?.Email && (
                <a href={data.socials.Email} className={styles.btnPrimary}>
                  Get In Touch
                </a>
              )}
              {data?.socials?.Github && (
                <a
                  href={data.socials.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSecondary}
                >
                  View GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
