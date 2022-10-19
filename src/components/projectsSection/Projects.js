import React from "react";
import styled from "styled-components";
import projectData from "./ProjectsData";
import ProjectItem from "./ProjectItem";
import { SectionHeading } from "../../UI";
const ProjectsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 3rem 0;
`;
export const ProjectsContainer = styled.div`
  width: 85vw;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    gap: 3rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <SectionHeading>Projects</SectionHeading>
      <ProjectsContainer>
        {projectData.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
