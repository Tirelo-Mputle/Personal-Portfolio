import React from "react";
import styled from "styled-components";

const StyledBackOverlay = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const BackOverlay = (props) => {
  return (
    <>
      {props.isBackOverlay && (
        <StyledBackOverlay onClick={props.onClick}></StyledBackOverlay>
      )}
    </>
  );
};

export default BackOverlay;
