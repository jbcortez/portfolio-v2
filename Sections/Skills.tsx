import React from "react";
import styled from "styled-components";
import {
  Container,
  SectionTitle,
  PrimaryBackground,
} from "../styles/Components";

const Skills: React.FC = () => {
  return (
    <Section>
      <SectionTitle variant={"primary"}>Skills</SectionTitle>
      <PrimaryBackground>
        <InnerContainer>
          <Row>
            <Skill>React</Skill>
            <Skill>TypeScript</Skill>
            <Skill>Javascript</Skill>
            <Skill>Sass</Skill>
          </Row>
          <Row>
            <Skill>Node</Skill>
            <Skill>MongoDB</Skill>
            <Skill>Cypress</Skill>
            <Skill>Figma</Skill>
          </Row>
        </InnerContainer>
      </PrimaryBackground>
    </Section>
  );
};

export default Skills;

const Section = styled.section`
  width: 100vw;
  background: ${(props) => props.theme.colors.secondary};
  padding-bottom: ${(props) => props.theme.spacing[9]};
`;

const InnerContainer = styled(Container)`
  padding: ${(props) => props.theme.spacing[4]} 0;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[3]};
  }
`;

const Skill = styled.span`
  font-family: "Migra", sans-serif;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.secondary};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  & > *:not(:last-child) {
    padding-right: ${(props) => props.theme.spacing[3]};
  }
`;
