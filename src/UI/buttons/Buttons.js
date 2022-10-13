import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.robotoMono};
  border: none;
  &.big {
    padding: 1rem 4rem;
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.btnColor};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.xxMed};
  }
  &.small {
    padding: 1.5rem 2rem;
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.btnColor};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  &:hover {
    border: 1.5px solid ${(props) => props.btnColor};
    color: ${(props) => props.btnColor};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Buttons = (props) => {
  return (
    <StyledButton
      className={props.className}
      fontColor={props.fontColor}
      btnColor={props.btnColor}
      type={props.type}
    >
      {props.children}
    </StyledButton>
  );
};

export default Buttons;
