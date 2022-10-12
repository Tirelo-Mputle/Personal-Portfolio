import React from "react";
import styled from "styled-components";
import { navItems } from "../../components/index";
import { NavLinks } from "../index";
import { ImCross } from "react-icons/im";
import { BackOverlay } from "../../UI/index";
const WhiteOverlayContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    display: none;
  }
`;
const StyledWhiteOverlay = styled.nav`
  position: fixed;
  width: 70vw;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
  bottom: 0;
  left: 0;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    width: 40vw;
  }
`;

const CrossDiv = styled.div`
  text-align: right;
  padding: 1.5rem 2rem;
`;
const SideNavList = styled.ul`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xxMed};
  text-transform: capitalize;
  color: red;
`;

const WhiteOverlay = (props) => {
  return (
    <WhiteOverlayContainer>
      <BackOverlay
        isBackOverlay={props.isBackOverlay}
        onClick={props.closeSideNav}
      ></BackOverlay>
      <StyledWhiteOverlay>
        <CrossDiv>
          <ImCross onClick={props.closeSideNav} />
        </CrossDiv>
        <SideNavList>
          {navItems.map((item, index) => {
            return (
              <NavLinks
                to={item}
                key={index}
                navlinkColor={(props) => props.theme.colors.mainGray}
              >
                <li onClick={props.closeSideNav}>{item}</li>
              </NavLinks>
            );
          })}
        </SideNavList>
      </StyledWhiteOverlay>
    </WhiteOverlayContainer>
  );
};

export default WhiteOverlay;
