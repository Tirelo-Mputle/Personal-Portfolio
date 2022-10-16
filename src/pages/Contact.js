import React from "react";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import { SectionHeading } from "../UI";
import { Contacts } from "../components";

const ContactsSection = styled.section`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: ${({ theme }) => theme.fonts.robotoMono};
    margin-top: 2rem;
  }
`;
const Contact = (props) => {
  return (
    <ContactsSection>
      <SectionHeading>Contacts</SectionHeading>

      <Contacts />
      <h3>Looking forward to hearing from you.</h3>
    </ContactsSection>
  );
};

export default Contact;
