import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainGray: "#1B1A17",
    darkGray: "#666562",
    secondaryGray: "#b3b3b3",
    mainOrange: "#FF8303",
    brown: "#A35709",
    lightBrown: "#e4be99",
    peach: "#F0E3CA",
    lightPeach: "#fffefd",
    white: "#FFF",
    modalBackground: "#141414b7",
  },
  fontSizes: {
    xxSm: "0.5rem",
    xSm: "0.75rem",
    sm: "1rem",
    xxMed: "1.25rem",
    xMed: "1.5rem",
    med: "1.75rem",
    xxLg: "2rem",
    xLg: "2.25rem",
    lg: "2.5rem",
    xxBig: "2.75rem",
    xBig: "3rem",
    big: "4rem",
    huge: "5rem",
  },
  fonts: {
    limeLight: "'Limelight', cursive",
    roboto: "'Roboto', sans-serif",
    robotoMono: "'Roboto Mono', monospace",
  },
  mediaScreen: {
    tablet: "426px",
    laptop: "769px",
    lgLaptop: "1025px",
    xLgLaptop: "1441px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
