import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink).attrs((props) => ({
  className: props.className,
}))`
  &.active {
    color: ${({ theme }) => theme.colors.secondaryGray};
  }

  color: ${(props) => props.navlinkColor};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryGray};
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavLinks = (props) => {
  return (
    <StyledNavLink
      to={props.to}
      navlinkColor={props.navlinkColor}
      className={({ isActive }) => (isActive ? "active" : null)}
    >
      {props.children}
    </StyledNavLink>
  );
};

export default NavLinks;
