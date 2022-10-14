import React from "react";
import styled from "styled-components";
const StyledHeadingSection = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 3rem;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    margin-bottom: 4rem;
    font-size: ${({ theme }) => theme.fontSizes.xBig};
  }
`;
const SectionHeading = (props) => {
  return <StyledHeadingSection>{props.children}</StyledHeadingSection>;
};

export default SectionHeading;
