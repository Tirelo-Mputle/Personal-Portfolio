import React from "react";
import styled from "styled-components";
import projectData from "./ProjectsData";
import ProjectItem from "./ProjectItem";
const ProjectsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.peach};
  padding: 2rem 0;
`;
const ProjectsContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectsContainer>
        {projectData.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
