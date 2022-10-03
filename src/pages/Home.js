import React from "react";
// UI
import { CenteredSection } from "../UI";
//components
import { Intro } from "../components";
const Home = (props) => {
  return (
    <CenteredSection bgColor={(props) => props.theme.colors.lightPeach}>
      <Intro />
    </CenteredSection>
  );
};

export default Home;
