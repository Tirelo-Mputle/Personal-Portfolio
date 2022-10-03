import React from "react";
import styled from "styled-components";

const StyledCenteredSection = styled.section`
  padding: 3rem 0;
  background-color: ${(props) => props.bgColor};
`;

const CenteredSection = (props) => {
  return (
    <StyledCenteredSection bgColor={props.bgColor}>
      {props.children}
    </StyledCenteredSection>
  );
};

export default CenteredSection;
