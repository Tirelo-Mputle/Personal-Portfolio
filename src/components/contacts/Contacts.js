import React from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const StyledContacts = styled.div.attrs((props) => ({
  className: props.className,
}))`
  margin: 2rem 0 0 0;
  span {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 1.5rem;

    & .icons {
      color: ${({ theme }) => theme.colors.brown};
    }
  }
`;
const ContactsSocialsContainer = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 2rem;
`;
const Contacts = () => {
  return (
    <StyledContacts>
      <span>
        <FaPhoneAlt className="icons" />
        0676617468
      </span>
      <span>
        <MdEmail className="icons" />
        tirelomputle0@gmail.com
      </span>
      <ContactsSocialsContainer>
        <span>
          <a
            href="https://www.linkedin.com/in/tirelo-mputle-70b93986/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icons" />
          </a>
        </span>
        <span>
          <a
            href="https://github.com/Tirelo-Mputle?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icons" />
          </a>
        </span>
      </ContactsSocialsContainer>
    </StyledContacts>
  );
};

export default Contacts;
