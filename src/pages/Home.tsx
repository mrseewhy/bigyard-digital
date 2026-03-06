import Credibility from "../components/Credibility"
import CTABlock from "../components/CTABlock"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import WhoWeAre from "../components/WhoWeAre"

const Home = () => {
    return (
        <div>
            <Hero />
            <Credibility />
            <WhoWeAre />
            <Services />
            <Testimonials />
            <CTABlock />
        </div>
    )
}

export default Home