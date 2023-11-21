import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./screens/AboutUs";
import HeroSection from "./screens/HeroSection";
import WhyChooseUs from "./screens/WhyChooseUs";
import { ParallaxProvider } from "react-scroll-parallax";
import Services from "./screens/Services";
import Contact from "./screens/Contact";
import SubNavbar from "./components/SubNavbar";
import Blog from "./components/Blog";
import WhatsappLogo from "./components/WhatsappLogo";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ParallaxProvider>
      <WhatsappLogo />
      <SubNavbar />
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Blog />
      <Contact />
    </ParallaxProvider>
  );
}

export default App;
