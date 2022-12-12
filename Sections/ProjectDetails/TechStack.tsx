import React from "react";
import styled from "styled-components";
import {
  Container,
  PrimaryBackground,
  SecondaryBackground,
  ProjectSectionTitle,
} from "../../styles/Components";
import { useMediaQuery } from "@mui/material";
import TechItem from "../../Components/TechItem";

const Skills: React.FC = () => {
  const matches = useMediaQuery("(min-width:65em)");

  return (
    <Section>
      <TitleContainer>
        <ProjectSectionTitle>Tech Stack</ProjectSectionTitle>
      </TitleContainer>
      <PrimaryBackground>
        <InnerContainer>
          <Row>
            <Column>
              <TechItem tech={"React"} variant={"primary"} />
              <TechItem tech={"TypeScript"} variant={"primary"} />
              <TechItem tech={"Sass"} variant={"primary"} />
            </Column>
            <Column>
              <TechItem tech={"Styled Components"} variant={"primary"} />
              <TechItem tech={"Node"} variant={"primary"} />
              <TechItem tech={"Express"} variant={"primary"} />
            </Column>
            <Column>
              <TechItem tech={"MongoDB"} variant={"primary"} />
              <TechItem tech={"Docker"} variant={"primary"} />
              <TechItem tech={"Kubernetes"} variant={"primary"} />
            </Column>
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
  padding: ${(props) => props.theme.spacing[6]} 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[3]} 0;
  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[7]};
  }

  @media screen and (min-width: 65em) {
    flex-direction: row;
  }
`;

const InnerContainer = styled(Container)`
  padding-top: ${(props) => props.theme.spacing[4]};
  padding-bottom: ${(props) => props.theme.spacing[4]};
  max-width: 120rem;
  margin: 0 auto;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[3]};
  }
`;

const TitleContainer = styled(InnerContainer)`
  padding: 0 2rem;
  @media screen and (min-width: 1220px) {
    padding: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[1]};
  }

  @media screen and (min-width: 65em) {
    & > *:not(:last-child) {
      margin-bottom: ${(props) => props.theme.spacing[2]};
    }
  }
`;

const Subtitle = styled.h3`
  font-family: "PP Neue Montreal", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
`;
