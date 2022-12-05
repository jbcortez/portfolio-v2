import React from "react";
import styled from "styled-components";
import { Container, SectionTitle } from "../styles/Components";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <Section>
      <InnerContainer>
        <SectionTitle variant={"primary"}>Get in touch</SectionTitle>
        <ContactForm />
      </InnerContainer>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  background: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing[6]} 0;
`;

const InnerContainer = styled(Container)``;
