import React from "react";
import styled from "styled-components";
import { Buttons, Links } from "../../UI/index";

const ProjectItemContainer = styled.article`
  position: relative;
  max-width: 30rem;
  height: 25rem;
  max-height: 30rem;
  object-fit: cover;
  margin-bottom: 2rem;
  border-radius: 1rem;
`;
const ProjectOverlay = styled.div`
  background-color: #00000099;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 1rem;

  &:hover {
    opacity: 0;
  }
`;
const ProjectImg = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
`;

const ProjectBanner = styled.div`
  position: absolute;
  padding: 2rem;
  bottom: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
`;
const ProjectName = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.med};
  font-weight: 900;

  color: ${({ theme }) => theme.colors.lightBrown};
`;
const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightPeach};
`;
const ProjectToolsContainer = styled.div`
  color: ${({ theme }) => theme.colors.lightBrown};
  display: flex;
  font-weight: 600;
  gap: 1rem;
`;
const ProjectsButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
const ProjectItem = (props) => {
  return (
    <ProjectItemContainer>
      <ProjectOverlay></ProjectOverlay>
      <ProjectImg src={props.image} alt={props.projectName} />
      <ProjectBanner>
        <ProjectName>{props.projectName}</ProjectName>
        <ProjectDescription>{props.description}</ProjectDescription>
        <ProjectToolsContainer>
          {props.tools.map((tool, index) => {
            return <span key={index}>{tool}</span>;
          })}
        </ProjectToolsContainer>
        <ProjectsButtonsContainer>
          <Links to="projects">
            <Buttons
              className="small"
              fontColor={(props) => props.theme.colors.white}
              btnColor={(props) => props.theme.colors.darkGray}
              type="button"
            >
              github
            </Buttons>
          </Links>
          <Buttons
            className="small"
            fontColor={(props) => props.theme.colors.white}
            btnColor={(props) => props.theme.colors.brown}
            type="button"
          >
            site
          </Buttons>
        </ProjectsButtonsContainer>
      </ProjectBanner>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
