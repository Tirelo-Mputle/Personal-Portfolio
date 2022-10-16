import React from "react";
import styled from "styled-components";
import { SectionHeading, Buttons } from "../../UI";
import { ResumeLink, Contacts } from "../index";
import profileImg from "../../assets/images/profile-img.jpg";
import { VscTriangleRight } from "react-icons/vsc";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const StyledAboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightPeach};
  padding: 3rem 0 5rem 0;
`;
const AboutContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  max-width: 1170px;
`;
const AboutBanner = styled.article`
  display: grid;
  place-items: center;
`;
const AboutImg = styled.img`
  width: 10rem;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const AboutTextContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    width: 90%;
    display: flex;
    gap: 5rem;
    justify-content: space-between;
  }
`;
const AboutText = styled.div`
  /* width: 85%; */
  max-width: 35rem;
  line-height: 1.5rem;
`;
const AboutTech = styled.div`
  margin: 1rem 0;
  ul {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

const ContactsContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.brown};
  margin-top: 2rem;
  justify-self: flex-start;
  width: 100%;
  h2 {
    color: ${({ theme }) => theme.colors.darkGray};
  }
  span {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.2em;
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    border: none;
    width: 35%;
    margin-top: 0;
    h2 {
      margin-top: 0;
    }
  }
`;
const AboutSection = () => {
  return (
    <StyledAboutSection>
      <SectionHeading>About me</SectionHeading>

      <AboutContainer>
        <AboutBanner>
          <AboutImg src={profileImg} alt="Tirelo Mputle" />
          <AboutTextContainer>
            <AboutText>
              A <b>frontend web developer</b> looking to start their career in
              an entry-level position.
              <AboutTech>
                Technologies predominately used to build projects:
                <ul>
                  <li>
                    <VscTriangleRight /> React
                  </li>
                  <li>
                    <VscTriangleRight />
                    Styled Components
                  </li>
                </ul>
              </AboutTech>{" "}
              Excited to continue learning and improve their skills and quality
              of service.
              <br />
              <br />
              Is open-minded, an earnest learner and team orientated.
            </AboutText>
            <ContactsContainer>
              <div>
                <Contacts />
              </div>
              <div>
                <ResumeLink />
              </div>
            </ContactsContainer>
          </AboutTextContainer>
        </AboutBanner>
      </AboutContainer>
    </StyledAboutSection>
  );
};

export default AboutSection;
