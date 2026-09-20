
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./Componants/Common/Header.jsx";
import Footer from "./Componants/Common/Footer.jsx";

import Hero from "./Componants/Pages/Hero.jsx";
import HeroAbout from "./Componants/Pages/HeroAbout.jsx";
import Logoslider from "./Componants/Pages/LogoSection.jsx";
import CountrySection from "./Componants/Pages/CountrySection.jsx";
import JourneySteps from "./Componants/Pages/JourneySteps.jsx";
import Testimonials from "./Componants/Pages/Testimonials.jsx";
import AboutHero from "./Componants/Pages/AboutPage/AboutHero.jsx";
import AboutAbout from "./Componants/Pages/AboutPage/AboutAbout.jsx";
import VissionAndMission from "./Componants/Pages/AboutPage/VissionAndMission.jsx";
import TeamGuide from "./Componants/Pages/AboutPage/TeamGuide.jsx";
import WhyChoceUs from "./Componants/Pages/AboutPage/WhyChoceUs.jsx";
import ServicesHero from "./Componants/Pages/ServicesPage/ServicesHero.jsx";
import ServicesSection from "./Componants/Pages/ServicesPage/ServicesSection.jsx";
import Parth from "./Componants/Pages/ServicesPage/Parth.jsx";
import ContactForm from "./Componants/Pages/ContactPage/ContactForm.jsx";
import ContactHero from "./Componants/Pages/ContactPage/ContactHero.jsx";
import MapSection from "./Componants/Pages/ContactPage/MapSection.jsx";
import ScrollToTop from "./Componants/ScrallTop.jsx";
import VideoSection from "./Componants/VideoSection.jsx";
import OurTeamPage from "./Componants/Pages/OurTeamPage/OurTeamPage.jsx";

// Home Page
const Home = () => (
    <>
        <Hero />
        <VideoSection/>
        <HeroAbout />
        <Logoslider />
        <CountrySection />
        <Testimonials />
        <JourneySteps />
    </>
);

// About Page
const About = () => (
    <>
        <AboutHero/>
        <AboutAbout/>
        <VissionAndMission/>
        <TeamGuide/>
        <WhyChoceUs/>
    </>
);

// Services Page
const Services = () => (
    <>
       <ServicesHero/>
        <ServicesSection/>
        <Parth/>
    </>
);

// Our team Page
const OurTeam = () => (
    <>
       <OurTeamPage/>
    </>
);

const Contact = () => (
    <>
      <ContactHero/>
        <ContactForm/>
        <MapSection/>
    </>
);

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>

            {/* Always Visible */}
            <Header />

            {/* Middle Content Changes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ourteam" element={<OurTeam/>} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Always Visible */}
            <Footer />

        </BrowserRouter>
    );
}
export default App
