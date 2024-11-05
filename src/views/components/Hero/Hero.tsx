import HeroFaceImg from "../../../assets/images/hero-face.png";
import HeroBodyImg from "../../../assets/images/hero-body.png";
import HeroBg from "../../../assets/images/hp-hero-bg.png";
import HeroLinkArrow from "../../../assets/images/link-arrow.svg";
const HomeHeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={HeroBg} alt="" />
      </div>
      <div className="container hero-container">
        <div>
          <div>
            <img src={HeroFaceImg} alt="" />
          </div>
          <a>
            <p>Уход для лица</p>
            <img src={HeroLinkArrow} alt="" />
          </a>
        </div>
        <div>
          <div>
            <img src={HeroBodyImg} alt="" />
          </div>
          <a>
            <p>Уход для лица</p>
            <img src={HeroLinkArrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
