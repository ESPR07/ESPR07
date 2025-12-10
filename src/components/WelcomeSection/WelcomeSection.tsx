import { useContext } from "react";
import { dataContext } from "../../App";
import style from "./WelcomeSection.module.css";

function WelcomeSection() {
  const data = useContext(dataContext);

  if (data) {
    return (
      <>
        <section className={style.infoContainer}>
          <img
            className={style.nameGear}
            src="/src/assets/images/singleGear.webp"
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
            src="/src/assets/images/singleGear.webp"
            alt="A rotating Gear"
          />
          <img
            className={style.homePageImage2}
            src="/src/assets/images/singleGear.webp"
            alt="Another rotating gear"
          />
        </section>
      </>
    );
  } else {
    return(
      <h1>Oops, Something went wrong.</h1>
    )
  }
}

export default WelcomeSection;
