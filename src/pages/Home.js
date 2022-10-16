import React from "react";

//components
import { Intro, Projects, AboutSection, Footer } from "../components";
const Home = (props) => {
  return (
    <>
      <Intro />
      <Projects />
      <AboutSection />
    </>
  );
};

export default Home;
