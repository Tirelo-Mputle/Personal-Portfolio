import React from "react";
import styled from "styled-components";
import { SectionHeading } from "../../UI";
import profileImg from "../../assets/images/profile-img.jpg";
import { VscTriangleRight } from "react-icons/vsc";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Buttons } from "../../UI/index";
const StyledAboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightPeach};
  padding: 3rem 0;
`;
const AboutContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  max-width: 1170px;
`;
const AboutBanner = styled.article`
  display: grid;
  place-items: center;
  /* background-color: red; */
`;
const AboutImg = styled.img`
  width: 10rem;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const AboutText = styled.div`
  width: 85%;
  line-height: 1.5rem;
`;
const AboutTech = styled.div`
  margin: 1rem 0;
  ul {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

const Contacts = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.brown};
  margin-top: 2rem;

  span {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.2em;
  }
`;
const AboutSection = () => {
  return (
    <StyledAboutSection>
      <SectionHeading>About me</SectionHeading>

      <AboutContainer>
        <AboutBanner>
          <AboutImg src={profileImg} alt="Tirelo Mputle" />
          <AboutText>
            A <b>frontend web developer</b> looking to start their career in an
            entry-level position.
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
            Excited to continue learning and improve their skills and quality of
            service.
            <br />
            <br />
            Is open-minded, an earnest learner and team orientated.
          </AboutText>
        </AboutBanner>
        <Contacts>
          <div>
            <h2>Contacts</h2>
            <span>
              <FaPhoneAlt />
              0676617468
            </span>
            <span>
              <MdEmail />
              tirelomputle0@gmail.com
            </span>
            <span>
              <FaLinkedin />
              linkedIn
            </span>
            <span>
              <FaGithub />
              github
            </span>
          </div>
          <div>
            <Buttons
              fontColor={(props) => props.theme.colors.white}
              type="button"
              btnColor={(props) => props.theme.colors.brown}
              className="big"
            >
              resume
            </Buttons>
          </div>
        </Contacts>
      </AboutContainer>
    </StyledAboutSection>
  );
};

export default AboutSection;
