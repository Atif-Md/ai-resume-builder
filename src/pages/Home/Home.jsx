import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import Hero from "../../components/landing/Hero";
import AIFeatures from "../../components/landing/AIFeatures";
import Features from "../../components/landing/Features";
import Templates from "../../components/landing/Templates";
import Pricing from "../../components/landing/Pricing";
import FAQ from "../../components/landing/FAQ";
import Contact from "../../components/landing/Contact";



const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <AIFeatures />
            <Templates />
            <Pricing />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;