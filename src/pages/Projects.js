import React from "react";
import {
  ProjectItem,
  projectData,
  ProjectsContainer,
} from "../components/index";
import { SectionHeading } from "../UI";

const Projects = () => {
  return (
    <>
      <SectionHeading>Projects</SectionHeading>
      <ProjectsContainer>
        {projectData.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
