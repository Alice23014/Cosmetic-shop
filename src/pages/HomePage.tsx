import { Bestsellers } from "../views/components/bestsellers/bestsellers";
import { Care } from "../views/components/care/care";
import { Cta } from "../views/components/cta/cta";
import HomeHeroSection from "../views/components/Hero/Hero";

const Home = () => {
  return (
    <main>
    <HomeHeroSection/>
    <Bestsellers/>
    <Cta></Cta>
    <Care></Care>
    </main>
  );
};

export default Home;
