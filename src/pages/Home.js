import React from "react";
// UI
import { CenteredSection } from "../UI";
//components
import { Intro, Projects } from "../components";
const Home = (props) => {
  return (
    <>
      <Intro />
      <Projects />
    </>
  );
};

export default Home;
