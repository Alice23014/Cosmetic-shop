import { Bestsellers } from "../views/components/bestsellers/bestsellers";
import { Care } from "../views/components/care/care";
import { Cta } from "../views/components/cta/cta";
import HomeHeroSection from "../views/components/Hero/Hero";
import { Quote } from "../views/components/quote/quote";
import { Subscribe } from "../views/components/subscribe/subscribe";

const Home = () => {
  return (
    <main>
    <HomeHeroSection/>
    <Bestsellers/>
    <Cta></Cta>
    <Care></Care>
    <Quote></Quote>
    <Subscribe></Subscribe>
    </main>
  );
};

export default Home;
