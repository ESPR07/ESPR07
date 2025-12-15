import type { Response } from "../../@types/types";
import { useTheme } from "../../context/themeContext";
import style from "./WelcomeSection.module.css";

function WelcomeSection({ data }: { data: Response | null }) {
  const { theme } = useTheme();

  if (data) {
    return (
      <div className={style.welcomeSection}>
        <section className={style.infoContainer}>
          <img
            className={style.nameGear}
            src={
              theme === "light"
                ? "/src/assets/images/singleGearLight.webp"
                : "/src/assets/images/singleGear.webp"
            }
            alt="A rotating Gear"
          />
          <h1>{data.info.name.toUpperCase()}</h1>
          <h2>CREATIVE DEVELOPER</h2>
        </section>
        <section className={style.imageContainer}>
          <img
            className={style.selfie}
            src="/src/assets/images/selfie.webp"
            alt="Picture of me!"
          />
          <img
            className={style.homePageImage1}
            src={
              theme === "light"
                ? "/src/assets/images/singleGearLight.webp"
                : "/src/assets/images/singleGear.webp"
            }
            alt="A rotating Gear"
          />
          <img
            className={style.homePageImage2}
            src={
              theme === "light"
                ? "/src/assets/images/singleGearLight.webp"
                : "/src/assets/images/singleGear.webp"
            }
            alt="Another rotating gear"
          />
        </section>
      </div>
    );
  } else {
    return <h1>Oops, Something went wrong.</h1>;
  }
}

export default WelcomeSection;
