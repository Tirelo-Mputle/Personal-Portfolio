import React from "react";
import { NavLinks } from "../UI";
import styled from "styled-components";
import { navItems, MappedNavList } from "./index";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarSection = styled.section`
  max-width: 100vw;

  padding: 2rem 7.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
const NavToggle = styled.div`
  display: block;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.mainGray};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondaryGray};
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    display: none;
  }
`;
// const NavList = styled.ul`
//   font-family: ${({ theme }) => theme.fonts.robotoMono};
//   font-size: ${({ theme }) => theme.fontSizes.sm};
//   gap: 2rem;
//   display: none;
//   @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
//     display: flex;
//   }
// `;
// const NavListItem = styled.li`
//   text-transform: capitalize;
// `;
const Navbar = (props) => {
  return (
    <NavbarSection>
      <NavLinks to="/">
        <TMLogo>tm.</TMLogo>
      </NavLinks>
      <NavToggle onClick={props.openSideNav}>
        <GiHamburgerMenu />
      </NavToggle>
      <MappedNavList></MappedNavList>
    </NavbarSection>
  );
};

export default Navbar;
