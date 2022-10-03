import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  border: 1px solid red;
  height: 70vh;
`;
const IntroLeft = styled.div`
  span {
    display: block;
  }
`;
const IntroRight = styled.div``;
const Intro = () => {
  return (
    <IntroContainer>
      <IntroLeft>
        <span>Tirelo Mputle</span>
        <span>Frontend web developer</span>
      </IntroLeft>
      <IntroRight></IntroRight>
    </IntroContainer>
  );
};

export default Intro;
