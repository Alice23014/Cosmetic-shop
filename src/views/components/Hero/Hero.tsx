import HeroFaceImg from "../../../assets/images/hero-face.png";
import HeroBodyImg from "../../../assets/images/hero-body.png";
import HeroBg from "../../../assets/images/hp-hero-bg.png";
import HeroLinkArrow from "../../../assets/images/link-arrow.svg";
import Logo from "../../../assets/images/logo.svg";
import styles from "./Hero.module.scss";
import { ButtonOpacity } from "../../../shared/UI/button-opacity";

const HomeHeroSection = () => { 
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src={HeroBg} alt="" />
      </div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContainerLeft}>
          <div className={styles.heroContainerLeftImg}>
            <img src={HeroFaceImg} alt="" />
          </div>
          <a className={styles.heroContainerLeftLink}>
            <p className={styles.heroContainerLeftText}>Уход для лица</p>
            <img
              className={styles.heroContainerLeftArrow}
              src={HeroLinkArrow}
              alt=""
            />
          </a>
        </div>
        <div className={styles.heroContainerCenter}>
          <img className={styles.heroContainerCenterLogo} src={Logo}></img>
          <p></p>
          <ButtonOpacity />
        </div>
        <div className={styles.heroContainerRight}>
          <div className={styles.heroContainerRightImg}>
            <img src={HeroBodyImg} alt="" />
          </div>
          <a className={styles.heroContainerRightLink}>
            <p className={styles.heroContainerRightText}>Уход для лица</p>
            <img
              className={styles.heroContainerRightArrow}
              src={HeroLinkArrow}
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
