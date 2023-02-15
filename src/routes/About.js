import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg3 from "../components/HeroImg3";

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg3 heading="ABOUT." text="Im a friendly Front-End Developer." />
      <Footer />
    </div>
  );
};

export default About;
