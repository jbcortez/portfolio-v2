import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../styles/Components";
import Project from "../../Components/Project";
import { ProjectType } from "../../types";

const projectList: ProjectType[] = [
  {
    title: "Content Scheduler",
    description:
      "An application that allows users to design and schedule content changes on their website. Available on the Wix App Market.",
    variant: "primary",
    screenshot:
      "https://oceanapps.nyc3.cdn.digitaloceanspaces.com/screenshots/design-studio-screenshot-optimized.png",
    alt: "Content Scheduler screenshot",
    details: "/content-scheduler-details",
    github: "https://github.com/jbcortez/design-studio-demo",
    link: "https://designstudio.justinbcortez.com",
    tech: [
      "React",
      "TypeScript",
      "Sass",
      "Node",
      "Express",
      "MongoDB",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Ocean Apps Website",
    description:
      "The official website for Ocean Apps, a software development company.",
    variant: "secondary",

    alt: "Ocean Apps screenshot",
    github: "https://github.com/jbcortez/oceanapps",
    link: "https://www.oceanapps.com",
    tech: ["React", "Sass", "Gatsby"],
  },
  {
    title: "React Font Picker",
    description:
      "An accessible, easy-to-use font picker that uses Google Fonts and includes previews.",
    variant: "secondary",
    github: "https://github.com/jbcortez/react-font-picker",
    tech: ["React", "TypeScript"],
  },
  {
    title: "Coast Connect Website",
    description: "A website for a local non-profit.",
    variant: "secondary",
    link: "www.coastconnect.org",
    tech: ["Wordpress", "CSS"],
  },
];

const Projects = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  (props, ref) => {
    return (
      <Section id={"projects"} ref={ref}>
        <SectionTitle variant={"primary"}>
          Some things I&apos;ve built
        </SectionTitle>
        {projectList
          .filter((item) => item.variant === "primary")
          .map((item, i) => (
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
              tech={item.tech}
            />
          ))}
        <Row>
          {projectList
            .filter((item) => item.variant === "secondary")
            .map((item, i) => (
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
                tech={item.tech}
              />
            ))}
        </Row>
      </Section>
    );
  }
);

export default Projects;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.secondary};
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  @media screen and (min-width: 65em) {
    padding: ${(props) => props.theme.spacing[8]} 0;
    flex-direction: row;

    margin: 0 auto;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: ${(props) => props.theme.spacing[6]};
    }
  }
`;
