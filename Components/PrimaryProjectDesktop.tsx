import React from "react";
import styled from "styled-components";
import {
  Container,
  ProjectDescription,
  ProjectTitle,
} from "../styles/Components";
import SecondaryLink from "./SecondaryLink";
import FramedImage from "./FramedImage";
import Button from "./Button";
import TechItem from "./TechItem";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  screenshot?: string;
  github?: string;
  link?: string;
  details?: string;
  alt?: string;
  handleDetails: () => void;
  tech?: string[];
}

const PrimaryProjectDesktop: React.FC<Props> = ({
  title,
  description,
  screenshot,
  github,
  link,
  details,
  alt,
  handleDetails,
  tech,
}) => {
  return (
    <ContainerStyles>
      <InnerContainer>
        <Column>
          <ProjectTitleStyles variant={"primary"}>{title}</ProjectTitleStyles>
          <ProjectDescriptionStyles variant={"primary"}>
            {description}
          </ProjectDescriptionStyles>
          <Row>
            <TechColumn style={{ marginRight: "5rem" }}>
              {tech?.slice(0, 4).map((item) => (
                <TechItem variant={"primary"} key={item} tech={item} />
              ))}
            </TechColumn>
            <TechColumn>
              {tech?.slice(4).map((item) => (
                <TechItem variant={"primary"} key={item} tech={item} />
              ))}
            </TechColumn>
          </Row>
          <SecondaryLinkContainer>
            {github && (
              <SecondaryLink variant={"secondary"} url={github}>
                Github
              </SecondaryLink>
            )}
            <SecondaryLink
              variant={"secondary"}
              url={
                "https://www.wix.com/app-market/content-scheduler-by-oceanapps"
              }
            >
              Wix App Market Listing
            </SecondaryLink>
          </SecondaryLinkContainer>
          <ButtonRow>
            <Link href={"/project-details"}>
              <Button variant={"secondary"}>View Details</Button>
            </Link>
            <Button variant={"secondary"}>
              <a
                href={"https://design-studio-demo.onrender.com/design"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Demo
              </a>
            </Button>
          </ButtonRow>
        </Column>
        <Column>
          {screenshot && <FramedImage src={screenshot} alt={alt || ""} />}
        </Column>
      </InnerContainer>
    </ContainerStyles>
  );
};

export default PrimaryProjectDesktop;

const ContainerStyles = styled(Container)`
  background: ${(props) => props.theme.colors.primary};
  min-width: 100vw;
  padding: ${(props) => props.theme.spacing[8]} 2rem;

  @media screen and (min-width: 120rem) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const ProjectTitleStyles = styled(ProjectTitle)`
  font-size: 3.2rem;
  margin-bottom: ${(props) => props.theme.spacing[3]};
`;

const ProjectDescriptionStyles = styled(ProjectDescription)`
  margin-bottom: ${(props) => props.theme.spacing[6]};
  max-width: 60rem;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 65em) {
    padding: 0;

    & > *:not(:last-child) {
      padding-right: ${(props) => props.theme.spacing[8]};
    }
  }
`;

const Row = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.secondary};
  align-items: center;
  justify-content: flex-start;
`;

const ButtonRow = styled(Row)`
  margin-top: ${(props) => props.theme.spacing[6]};

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[5]};
  }
`;

const SecondaryLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.spacing[6]};

  & > :not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[3]};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const TechColumn = styled(Column)`
  width: fit-content;
  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[3]};
  }
`;
