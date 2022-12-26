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
            <Text variant={"secondary"} style={{ fontSize: "2rem" }}>
              Hello! I&apos;m Justin, a frontend developer with a penchant for
              all things web. I began my journey in 2020, when I broke free from
              the shackles of IT and embarked on a new adventure in web
              development. It&apos;s been a wild ride, but also an incredibly
              rewarding one.
            </Text>
            <Text variant={"secondary"} style={{ fontSize: "2rem" }}>
              In my spare time, I run a little business called Ocean Apps, where
              I developed a SaaS application called Content Scheduler. It
              features a dynamic widget that allows Wix users to design and
              schedule content updates for their websites with ease. It was a
              challenging and fulfilling project, and I learned a ton along the
              way.
            </Text>
            <Text variant={"secondary"} style={{ fontSize: "2rem" }}>
              Now, I&apos;m looking to join a team and take my skills to the
              next level. I&apos;m interested in opportunities that will
              challenge me and allow me to grow as a professional. If
              you&apos;ve got an opening and think I might be a good fit,
              don&apos;t hesitate to get in touch!
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
