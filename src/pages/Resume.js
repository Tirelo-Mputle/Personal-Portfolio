import React from "react";
import { SectionHeading } from "../UI/index";
import resume from "../assets/images/resume.JPG";
import styled from "styled-components";

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
`;
const ResumeImg = styled.img`
  width: 25rem;
  height: auto;
  max-width: 30rem;
  border: 1px solid red;
  object-fit: cover;
`;

const Resume = () => {
  return (
    <>
      <SectionHeading>Resume</SectionHeading>
      <ResumeContainer>
        <a
          href="https://drive.google.com/file/d/1ZcWuFCKkj4rlq-rJbcyQEukfLpabKa5R/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          my resume
        </a>
        <ResumeImg src={resume} alt="resume" />
      </ResumeContainer>
    </>
  );
};

export default Resume;
