import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/Components";
import { ProjectDescription } from "../../styles/Components";

const Challenges = () => {
  return (
    <Section>
      <InnerContainer>
        <SectionTitle>Some Challenges I Faced</SectionTitle>
        <Column>
          <ProjectDescriptionStyles variant={"secondary"}>
            Throughout this project I was continually pushed outside of my
            comfort zone. There were many first-times for me, and this pushed me
            to grow as a developer. I learned more from this project than I ever
            could've imagined.
          </ProjectDescriptionStyles>
          <ProjectDescriptionStyles variant={"secondary"}>
            Halfway through the project, I began to learn TypeScript. The state
            in the app was growing more complex as I added more features. It
            became difficult to track which data was being passed to the backend
            and where it was being passed. I decided it would be beneficial to
            refactor the app using TypeScript, and it was worth every minute. I
            can't see myself ever going back to Vanilla Javascript.
          </ProjectDescriptionStyles>
          <ProjectDescriptionStyles variant={"secondary"}>
            After a year of development (as I said, I had to learn a lot along
            the way), having officially deployed the app into production and
            being listed in the Wix App Market, I am proud of what I've built.
            It's too soon to tell if it will be a success, but that's all part
            of the journey. I'm excited to continue building the app with
            updates and can't wait to see what the future holds for my career as
            a developer.
          </ProjectDescriptionStyles>
        </Column>
      </InnerContainer>
    </Section>
  );
};

export default Challenges;

const InnerContainer = styled(Container)``;

const Section = styled.section`
  width: 100vw;
  padding-top: ${(props) => props.theme.spacing[6]};
  padding-bottom: ${(props) => props.theme.spacing[6]};
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
`;

const SectionTitle = styled.h3`
  font-family: Migra, sans-serif;
  font-size: 2.4rem;
  margin-bottom: ${(props) => props.theme.spacing[3]};

  @media screen and (min-width: 65em) {
    font-size: 3.6rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[4]};
  }
`;
const ProjectDescriptionStyles = styled(ProjectDescription)`
  margin-bottom: ${(props) => props.theme.spacing[5]};
  max-width: 60rem;

  @media screen and (min-width: 65em) {
    font-size: 2rem;
    max-width: 70rem;
  }
`;
