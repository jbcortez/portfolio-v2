import React from "react";
import styled from "styled-components";
import { Container, SectionTitle, Text } from "../styles/Components";
import FramedImage from "../Components/FramedImage";

const About = () => {
  return (
    <Section>
      <SectionTitle variant={"secondary"}>About Me</SectionTitle>
      <InnerContainer>
        <FramedImage src={"https://via.placeholder.com/150"} alt={"alt"} />
        <Text variant={"secondary"}>
          Hello, I’m Justin, a frontend developer from Santa Cruz, California. I
          started my journey into web development in 2020 when I was released
          into the wild from my IT imprisonment. I kid, it was a fun experience,
          but not nearly as challenging and rewarding as web development.
        </Text>
        <Text variant={"secondary"}>
          I spent the past year developing a SaaS application for my business,
          Ocean Apps, called Content Scheduler. It enables Wix users to design
          and schedule content changes on their websites in a dynamic widget. It
          was a fulfilling journey, teaching me more than I could’ve imagined.
        </Text>
        <Text variant={"secondary"}>
          On to my next journey, I’m looking to take the experience I’ve gained
          and join a team. I’m interested in challenging opportunities that will
          allow me to grow professionally. If you have an opportunity and think
          I may be a great fit, let me know!
        </Text>
      </InnerContainer>
    </Section>
  );
};

export default About;

const Section = styled.section`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing[6]} 0;
`;

const InnerContainer = styled(Container)``;
