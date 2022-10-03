import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarSection = styled.section`
  width: 85vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  /* box-shadow:  */
`;
const TMLogo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxMed};
  background-color: ${({ theme }) => theme.colors.mainGray};
  width: 2.5rem;
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: grid;
  place-content: center;
  padding: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.limeLight};
`;
const NavList = styled.ul`
  font-family: ${({ theme }) => theme.fonts.robotoMono};
  font-size: ${({ theme }) => theme.fontSizes.xSm};
  gap: 2rem;
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    display: flex;
  }
`;
const Navbar = (props) => {
  return (
    <NavbarSection>
      <TMLogo>tm.</TMLogo>
      <div>
        <GiHamburgerMenu />
      </div>
      <NavList>
        <li>Projects</li>
        <li>About</li>
        <li>Resume</li>
        <li>Contact</li>
      </NavList>
    </NavbarSection>
  );
};

export default Navbar;
