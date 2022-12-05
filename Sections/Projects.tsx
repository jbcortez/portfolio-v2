import React from "react";
import styled from "styled-components";
import { Container, SectionTitle } from "../styles/Components";
import Project from "../Components/Project";
import { ProjectType } from "../types";

const projectList: ProjectType[] = [
  {
    title: "Content Scheduler",
    description:
      "An application that allows users to design and schedule content changes on their website. Available on the Wix App Market.",
    variant: "primary",
    screenshot: "https://via.placeholder.com/150",
    alt: "Content Scheduler screenshot",
    details: "/content-scheduler-details",
    github: "https://github.com/jbcortez/design-studio-demo",
    link: "https://designstudio.justinbcortez.com",
  },
  {
    title: "Ocean Apps Website",
    description:
      "The official website for Ocean Apps, a software development company.",
    variant: "secondary",
    screenshot: "https://via.placeholder.com/150",
    alt: "Ocean Apps screenshot",
    github: "https://github.com/jbcortez/oceanapps",
    link: "https://www.oceanapps.com",
  },
  {
    title: "React Font Picker",
    description:
      "An accessible, easy-to-use font picker that uses Google Fonts and includes previews.",
    variant: "secondary",
    github: "https://github.com/jbcortez/react-font-picker",
  },
  {
    title: "Coast Connect Website",
    description: "A website for a local non-profit.",
    variant: "secondary",
    link: "www.coastconnect.org",
  },
];

const Projects: React.FC = () => {
  return (
    <Section>
      <SectionTitle variant={"primary"}>Projects</SectionTitle>
      <InnerContainer>
        {projectList.map((item, i) => (
          <Project
            key={item.title + i}
            title={item.title}
            description={item.description}
            variant={item.variant}
            alt={item.alt}
            screenshot={item.screenshot}
            details={item.details}
            link={item.link}
            github={item.github}
          />
        ))}
      </InnerContainer>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.secondary};
  padding-bottom: ${(props) => props.theme.spacing[6]};
`;

const InnerContainer = styled(Container)``;
