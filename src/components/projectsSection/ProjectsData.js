import React from "react";
import twoCoffeSiteImg from "../../assets/images/two14coffee.JPG";
import shortnerSiteImg from "../../assets/images/shortener.JPG";
import two14Video from "../../assets/video/two14 final video.mp4";
import shortlyVideo from "../../assets/video/shortly final video.mp4";
import styled from "styled-components";
const ProjectDescriptionContainer = styled.div`
  p {
    font-weight: 600;
  }
  li {
    list-style: circle;
  }
  a {
    color: ${({ theme }) => theme.colors.brown};
  }
`;
const two14Description = (
  <ProjectDescriptionContainer>
    <p>
      An e-commerce website for the{" "}
      <a href="https://two14coffee.com.au/" rel="noopener" target="_blank">
        Two 14 coffee shop
      </a>
    </p>
    <ul>
      <li>
        A multipage e-commerce website using React Router 6 to navigate between
        pages.
      </li>

      <li>
        Customers can customize their orders as well as adding and removing
        items from the shopping cart.
      </li>
    </ul>
  </ProjectDescriptionContainer>
);
const greeting2 = (
  <ProjectDescriptionContainer>
    <p>
      URL Link shortening web application using the{" "}
      <a
        href="https://github.com/robvanbakel/gotiny-api"
        rel="noopener"
        target="_blank"
      >
        GoTiny link shortener API
      </a>
    </p>
    <ul>
      <li>
        Used API (GoTiny link shortener) to shorten user inputted long URL link.
      </li>
      <li>
        Users can copy the shortened link and use it instead of the long link
      </li>
      <li>
        Used <b>Context API</b> to manage state
      </li>
    </ul>
  </ProjectDescriptionContainer>
);
const projectData = [
  {
    projectName: "React E-commerce Coffee Shop website",
    description: two14Description,
    image: twoCoffeSiteImg,
    tools: ["React", "Styled Components"],
    stateManagement: "useState",
    api: "",
    github: "https://github.com/Tirelo-Mputle/two14-coffee-portfolio-project",
    siteLink: "https://two14coffee.netlify.app/",
    video: two14Video,
  },
  {
    projectName: "React Link Shortening Web Application",
    description: greeting2,
    image: shortnerSiteImg,
    tools: ["React", "Styled Components", "API"],
    stateManagement: "useState",
    api: "",
    github: "https://github.com/Tirelo-Mputle/Shortly-Link-Shortener",
    siteLink: "https://shortly-url-shorter-api.netlify.app/",
    video: shortlyVideo,
  },
];

export default projectData;
