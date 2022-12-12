import React from "react";
import styled from "styled-components";
import { ProjectTitle, ProjectDescription } from "../styles/Components";
import DetailsButton from "./DetailsButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useMediaQuery } from "@mui/material";
import PrimaryProjectDesktop from "./PrimaryProjectDesktop";
import TechItem from "./TechItem";
import Button from "./Button";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  screenshot?: string;
  github?: string;
  link?: string;
  details?: string;
  variant: "primary" | "secondary";
  alt?: string;
  tech?: string[];
}

const Project: React.FC<Props> = ({
  title,
  details,
  link,
  github,
  screenshot,
  description,
  variant = "primary",
  alt,
  tech,
}) => {
  const isDesktop = useMediaQuery("(min-width: 65em)");

  const handleDetails = () => {
    // handleRoute(details)
  };

  return (
    <>
      {isDesktop && variant === "primary" ? (
        <PrimaryProjectDesktop
          title={title}
          details={details}
          link={link}
          github={github}
          description={description}
          handleDetails={handleDetails}
          tech={tech}
          screenshot={screenshot}
        />
      ) : (
        <Container variant={variant}>
          <ProjectTitle variant={variant}>{title}</ProjectTitle>
          <ProjectDescription style={{ maxWidth: "50rem" }} variant={variant}>
            {description}
          </ProjectDescription>

          {tech && (
            <TechList>
              <Column>
                {tech?.slice(0, 4).map((item) => (
                  <TechItem key={item} tech={item} variant={variant} />
                ))}
              </Column>
              <Column>
                {tech?.slice(4).map((item) => (
                  <TechItem variant={variant} key={item} tech={item} />
                ))}
              </Column>
            </TechList>
          )}

          {screenshot && <Screenshot src={screenshot} alt={alt} />}
          <SpaceBetween details={details}>
            {details && (
              <Link href={"/project-details"}>
                <Button onClick={handleDetails} variant={"secondary"}>
                  View Details
                </Button>
              </Link>
            )}
            <IconsContainer>
              {github && (
                <IconContainer variant={variant}>
                  <GitHubIcon
                    style={{ color: "inherit", fontSize: "inherit" }}
                  />
                </IconContainer>
              )}
              {link && (
                <IconContainer variant={variant}>
                  <OpenInNewIcon
                    style={{ color: "inherit", fontSize: "inherit" }}
                  />
                </IconContainer>
              )}
            </IconsContainer>
          </SpaceBetween>
        </Container>
      )}
    </>
  );
};

export default Project;

const Container = styled.div<{ variant: "primary" | "secondary" }>`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing[5]};
  margin: 2rem;
  margin-top: 0;

  border: ${(props) =>
    props.variant === "secondary"
      ? "3px solid " + props.theme.colors.primary
      : "none"};

  @media screen and (min-width: 65em) {
    margin: 0;
    width: 30vw;
  }
`;

const Screenshot = styled.img`
  aspect-ratio: 16/9;
  border-radius: 5px;
  margin-bottom: ${(props) => props.theme.spacing[5]};
  max-width: 60rem;
`;

const SpaceBetween = styled.div<{ details?: string }>`
  display: flex;
  justify-content: ${(props) => (props.details ? "space-between" : "flex-end")};

  @media screen and (min-width: 65em) {
    height: 100%;
    align-items: flex-end;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[4]};
  }
`;

const IconContainer = styled.button<{ variant: "primary" | "secondary" }>`
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 25px;
`;

const TechList = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[5]};

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[6]};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[2]};
  }
`;
