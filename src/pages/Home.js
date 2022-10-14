import React from "react";
// UI
import { CenteredSection } from "../UI";
//components
import { Intro, Projects, AboutSection } from "../components";
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
