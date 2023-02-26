import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Components';
import { ProjectDescription } from '../../styles/Components';

const Challenges = () => {
  return (
    <Section>
      <InnerContainer>
        <SectionTitle>Some Challenges I Faced</SectionTitle>
        <Column>
          <ProjectDescriptionStyles variant={'secondary'}>
            This project presented numerous opportunities for growth and
            learning, as I was continuously pushed to step outside of my comfort
            zone and tackle new tasks. As a result, I was able to significantly
            expand my skill set as a developer and gain valuable experience. I
            am grateful for the chance to challenge myself and exceed my own
            expectations.
          </ProjectDescriptionStyles>
          <ProjectDescriptionStyles variant={'secondary'}>
            One of the key challenges I faced during this project was working
            with complex data structures. As the state of the app grew more
            intricate with the addition of new features, it became increasingly
            difficult to track data flow between the frontend and backend. In
            order to address this issue, I made the decision to refactor the app
            using TypeScript. This proved to be an invaluable decision as it
            greatly improved the clarity and organization of the codebase. I now
            prefer using TypeScript over Vanilla JavaScript and can&apos;t see
            myself going back.
          </ProjectDescriptionStyles>
          <ProjectDescriptionStyles variant={'secondary'}>
            This project has been a major milestone in my development journey. I
            am proud of what I built and grateful for the opportunity to learn
            and grow through the process. The challenges I faced only served to
            fuel my passion for problem-solving and drive me to continue
            improving my skills. As I move forward in my career, I am excited to
            bring my enthusiasm, dedication, and expertise to future projects
            and continue to grow as a developer.
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
    font-size: 1.6rem;
    max-width: 70rem;
  }
`;
