import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinks = styled(Link).attrs((props) => ({
  className: props.className,
}))`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Links = (props) => {
  return (
    <StyledLinks className={props.className} to={props.to}>
      {props.children}
    </StyledLinks>
  );
};

export default Links;
