import React from "react";
import { Buttons } from "../UI";

const ResumeLink = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1bSIhtWANZ9OMz2pWlrJ-Ilr9LLKzD9Ro/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Buttons
        fontColor={(props) => props.theme.colors.white}
        btnColor={(props) => props.theme.colors.brown}
        type="button"
        className="small"
      >
        Resume
      </Buttons>
    </a>
  );
};

export default ResumeLink;
