import React from "react";
import styled from "styled-components";
import { ProjectTitle, ProjectDescription } from "../styles/Components";
import DetailsButton from "./DetailsButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Props {
  title: string;
  description: string;
  screenshot?: string;
  github?: string;
  link?: string;
  details?: string;
  variant: "primary" | "secondary";
  alt?: string;
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
}) => {
  const handleDetails = () => {
    // handleRoute(details)
  };

  return (
    <Container variant={variant}>
      <ProjectTitle variant={variant}>{title}</ProjectTitle>
      <ProjectDescription variant={variant}>{description}</ProjectDescription>
      {screenshot && <Screenshot src={screenshot} alt={alt} />}
      <SpaceBetween details={details}>
        {details && (
          <DetailsButton onClick={handleDetails} variant={"secondary"}>
            View Details
          </DetailsButton>
        )}
        <IconsContainer>
          {github && (
            <IconContainer variant={variant}>
              <GitHubIcon style={{ color: "inherit", fontSize: "inherit" }} />
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
  );
};

export default Project;

const Container = styled.div<{ variant: "primary" | "secondary" }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing[5]};
  margin-bottom: 2rem;
  border: ${(props) =>
    props.variant === "secondary"
      ? "3px solid " + props.theme.colors.primary
      : "none"};
`;

const Screenshot = styled.img`
  aspect-ratio: 16/9;
  border-radius: 5px;
  margin-bottom: ${(props) => props.theme.spacing[4]};
`;

const SpaceBetween = styled.div<{ details?: string }>`
  display: flex;
  justify-content: ${(props) => (props.details ? "space-between" : "flex-end")};
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
`;
