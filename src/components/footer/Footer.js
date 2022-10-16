import React from "react";
import styled from "styled-components";
const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.mainGray};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 0.5rem 0;
  font-family: ${({ theme }) => theme.fonts.robotoMono};
  font-size: ${({ theme }) => theme.fontSizes.xSm};
  margin-top: 2rem;
`;
const Footer = () => {
  return <StyledFooter>Built by Tirelo Mputle</StyledFooter>;
};

export default Footer;
