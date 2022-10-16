import React from "react";
import { NavLinks, Buttons } from "../UI/index";
import styled from "styled-components";
import { ResumeLink } from "../components/index";
export const navItems = ["projects", "about", "contacts"];
const NavList = styled.ul`
  font-family: ${({ theme }) => theme.fonts.robotoMono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  gap: 2rem;
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    display: flex;
    align-items: center;
  }
`;
const NavListItem = styled.li`
  text-transform: capitalize;
`;
const MappedNavList = () => {
  return (
    <NavList>
      {navItems.map((item, index) => {
        return (
          <NavLinks
            key={index}
            to={item}
            navlinkColor={(props) => props.theme.colors.mainGray}
          >
            <NavListItem>{item}</NavListItem>
          </NavLinks>
        );
      })}
      <ResumeLink />
    </NavList>
  );
};

export default MappedNavList;
