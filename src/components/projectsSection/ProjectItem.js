import React from "react";
import styled from "styled-components";
import { Buttons, Links } from "../../UI/index";

const ProjectItemContainer = styled.article`
  max-width: 30rem;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightPeach};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ProjectCardBottom = styled.footer``;

const ProjectImg = styled.video`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  height: 20rem;
`;

const ProjectBanner = styled.div`
  padding: 2rem;
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
  color: ${({ theme }) => theme.colors.darkGray};
`;
const ProjectToolsContainer = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
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
      <ProjectImg
        controls
        src={props.video}
        poster={props.image}
        preload="auto"
      ></ProjectImg>

      <ProjectCardBottom>
        <ProjectBanner>
          <ProjectName>{props.projectName}</ProjectName>
          <ProjectDescription>{props.description}</ProjectDescription>
          <ProjectToolsContainer>
            {props.tools.map((tool, index) => {
              return <span key={index}>{tool}</span>;
            })}
          </ProjectToolsContainer>
          <ProjectsButtonsContainer>
            <a href={props.github} target="_blank" rel="noopener">
              <Buttons
                className="small"
                fontColor={(props) => props.theme.colors.white}
                btnColor={(props) => props.theme.colors.darkGray}
                type="button"
              >
                Github
              </Buttons>
            </a>

            <a href={props.siteLink} target="_blank" rel="noopener">
              <Buttons
                className="small"
                fontColor={(props) => props.theme.colors.white}
                btnColor={(props) => props.theme.colors.brown}
                type="button"
              >
                View site
              </Buttons>
            </a>
          </ProjectsButtonsContainer>
        </ProjectBanner>
      </ProjectCardBottom>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
