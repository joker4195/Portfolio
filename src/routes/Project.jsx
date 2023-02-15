import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import WorkCard from "../components/WorkCard"
// import Work from "../components/work";
// import PricingCard from "../components/PricingCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="some of my most recent works " />
      {/* <Work /> */}
      <WorkCard/>
      {/* <PricingCard /> */}
      <Footer />
      {/* <WorkCard /> */}
    </div>
  );
};

export default Project;
