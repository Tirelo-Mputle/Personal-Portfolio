import React from "react";
import styled, { css } from "styled-components";
import reactIcon from "../../assets/icons/react-icon.png";
import profileImg from "../../assets/images/profile-img.jpg";
import styledComponentsIcon from "../../assets/icons/styledComponentsIcon.png";
import { Links, Buttons } from "../../UI";

const IntroContainer = styled.div`
  width: 85%;
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 1170px;
  height: 77vh;
  display: flex;
`;
const IntroLeft = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    width: 60%;
  }
  span {
    display: block;
  }
`;
const IntroLeftBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BannerTextShared = css`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 900;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xBig};
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    font-size: ${({ theme }) => theme.fontSizes.big};
  }
`;
const FirstSpan = styled.span`
  color: ${({ theme }) => theme.colors.brown};
  font-family: ${({ theme }) => theme.fonts.robotoMono};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xxMed};
`;

const Name = styled.span`
  ${BannerTextShared};
  color: ${({ theme }) => theme.colors.mainGray};
`;
const Title = styled.span`
  ${BannerTextShared};
  color: ${({ theme }) => theme.colors.darkGray};
  text-transform: capitalize;
  line-height: 3.5rem;
  max-width: 35rem;
`;
const SkillsContainer = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.robotoMono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
const SkillsIconContainer = styled.div`
  display: flex;
  gap: 2rem;
  span {
    max-width: 5rem;
  }
`;
const SkillsImgsContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  object-fit: cover;
`;
const SkillsImgs = styled.img`
  width: 100%;
  height: 100%;
`;
const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const IntroRight = styled.div`
  display: none;
  width: 40%;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    display: block;
  }
`;
const ProfileImgContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 100%;
  max-width: 25rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.colors.brown} 0px 20px 30px -10px;
  /* height: 80%; */
`;
const Intro = () => {
  return (
    <IntroContainer>
      <IntroLeft>
        <IntroLeftBanner>
          <FirstSpan>Hi, my name is</FirstSpan>
          <Name>Tirelo Mputle</Name>
          <Title>Frontend web developer</Title>
        </IntroLeftBanner>

        <SkillsContainer>
          <p>Skills/tools:</p>
          <SkillsIconContainer>
            <div>
              <SkillsImgsContainer>
                <SkillsImgs src={reactIcon} alt="react icon" />
              </SkillsImgsContainer>
              <span>react</span>
            </div>
            <div>
              <SkillsImgsContainer>
                <SkillsImgs
                  src={styledComponentsIcon}
                  alt="styled components icon"
                />
              </SkillsImgsContainer>
              <span>styled components</span>
            </div>
          </SkillsIconContainer>
        </SkillsContainer>
        <ButtonContainer>
          <Links to="projects">
            <Buttons
              type="button"
              fontColor={(props) => props.theme.colors.white}
              className="big"
              btnColor={(props) => props.theme.colors.brown}
            >
              View projects
            </Buttons>
          </Links>
        </ButtonContainer>
      </IntroLeft>
      <IntroRight>
        <ProfileImgContainer>
          <ProfileImg src={profileImg} alt="Tirelo Mputle" />
        </ProfileImgContainer>
      </IntroRight>
    </IntroContainer>
  );
};

export default Intro;
