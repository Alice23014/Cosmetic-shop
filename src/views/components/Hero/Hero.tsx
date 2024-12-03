import HeroFaceImg from "../../../assets/images/hero-face.png";
import HeroBodyImg from "../../../assets/images/hero-body.png";
import HeroBg from "../../../assets/images/hp-hero-bg.png";
import Logo from "../../../assets/images/logo.svg";
import styles from "./Hero.module.scss";
import { ButtonOpacity } from "../../../shared/UI/button-opacity/button-opacity";
import { HeroCard } from "../../../shared/UI/hero-card/hero-card";

const HomeHeroSection: React.FC = () => { 
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src={HeroBg} alt="" />
      </div>
      <div className={`container ${styles.heroContainer}`}>
        <HeroCard image={HeroFaceImg} text={"Уход для лица"}/>
        <div className={styles.heroContainerCenter}>
          <img className={styles.heroContainerCenterLogo} src={Logo}></img>
          <p className={styles.heroContainerCenterText}>Натуральная косметика <br></br> для бережного ухода за кожей</p>
          <ButtonOpacity />
        </div>
        <HeroCard image={HeroBodyImg} text={"Уход для тела"}/>
      </div>
    </section>
  );
};

export default HomeHeroSection;
