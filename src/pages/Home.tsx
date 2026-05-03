import CTABlock from "../components/CTABlock";
import Hero from "../components/MainHero";
import Credibility from "../components/NewCredibility";
import Services from "../components/NewServices";
import WhoWeAre from "../components/NewWhoWeAre";
import ClientsImages from "../components/OtherClientsImage";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <ClientsImages />
      <Credibility />
      <WhoWeAre />
      <Services />
      <Testimonials />
      <CTABlock />
    </div>
  );
};

export default Home;
