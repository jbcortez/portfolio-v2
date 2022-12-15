import React from "react";
import styled from "styled-components";
import { Container, SectionTitle, Text } from "../../styles/Components";
import FramedImage from "../../Components/FramedImage";

const About = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  ({}, ref) => {
    return (
      <Section id={"about"} ref={ref}>
        <SectionTitle variant={"secondary"}>About Me</SectionTitle>
        <InnerContainer>
          <ImageContainer>
            <FramedImage src={"/images/me.png"} alt={"alt"} />
          </ImageContainer>

          <Column>
            <Text variant={"secondary"}>
              Hello, I’m Justin, a frontend developer from Santa Cruz,
              California. I started my journey into web development in 2020 when
              I was released into the wild from my IT imprisonment. I kid, it
              was a fun experience, but not nearly as challenging and rewarding
              as web development.
            </Text>
            <Text variant={"secondary"}>
              I spent the past year developing a SaaS application for my
              business, Ocean Apps, called Content Scheduler. It enables Wix
              users to design and schedule content changes on their websites in
              a dynamic widget. It was a fulfilling journey, teaching me more
              than I could’ve imagined.
            </Text>
            <Text variant={"secondary"}>
              On to my next journey, I’m looking to take the experience I’ve
              gained and join a team. I’m interested in challenging
              opportunities that will allow me to grow professionally. If you
              have an opportunity and think I may be a great fit, let me know!
            </Text>
          </Column>
        </InnerContainer>
      </Section>
    );
  }
);

export default About;

const Section = styled.section`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing[6]} 0;

  @media screen and (min-width: 65em) {
    padding: ${(props) => props.theme.spacing[8]} 0;
  }
`;

const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 65em) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  flex-basis: 30%;
  min-width: 30rem;
  width: 100%;
  max-width: 40rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 65em) {
    width: 60rem;
  }
`;
