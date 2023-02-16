/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { Container, SectionTitle } from '../../styles/Components';
import ContactForm from '../../Components/ContactForm';

const Contact = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  (_props, ref) => {
    return (
      <Section id={'contact'} ref={ref}>
        <InnerContainer>
          <SectionTitle style={{ textAlign: 'left' }} variant={'primary'}>
            Get in touch
          </SectionTitle>
          <ContactForm />
        </InnerContainer>
      </Section>
    );
  }
);

export default Contact;

const Section = styled.section`
  background: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing[6]} 0;
  width: 100%;
  max-width: 25em;
  @media screen and (min-width: 65em) {
    padding: ${(props) => props.theme.spacing[8]} 0;
  }
`;

const InnerContainer = styled(Container)``;
