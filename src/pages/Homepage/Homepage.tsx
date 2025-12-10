import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import style from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={style.homePageMain}>
      <WelcomeSection/>
    </main>
  );
}

export default Homepage;
