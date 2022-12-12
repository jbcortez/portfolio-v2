import React from "react";
import FramedImage from "../../Components/FramedImage";
import styled from "styled-components";
import { Container } from "../../styles/Components";
import { ProjectDescription } from "../../styles/Components";
import { useMediaQuery } from "@mui/material";

const HowDoesItWork = () => {
  const desktop = useMediaQuery("(min-width: 65em)");
  return (
    <Section>
      <InnerContainer>
        <Row>
          <Column>
            {!desktop && (
              <ImageContainer>
                <FramedImage
                  src={
                    "https://oceanapps.nyc3.cdn.digitaloceanspaces.com/screenshots/design-studio-screenshot-optimized.png"
                  }
                  alt={"Content Scheduler Screenshot"}
                />
              </ImageContainer>
            )}
            <SectionTitle>How does it work?</SectionTitle>
            <ProjectDescriptionStyles variant={"secondary"}>
              Using the Content Scheduler Design Studio, users have the creative
              freedom to design their content however they like. It features
              almost everything you would expect in a wysiwyg editor: drag and
              drop, alignment snapping, custom fonts, templates, images,
              backgrounds, custom buttons, and the freedom to customize
              everything. I plan to add even more features in the near future.
            </ProjectDescriptionStyles>
            <ProjectDescriptionStyles variant={"secondary"}>
              After designing their content, users can jump over to the Schedule
              view and schedule their newly designed content to show on their
              site at any time of their choosing within 30 minute intervals.
              They can schedule as many designs as they like.
            </ProjectDescriptionStyles>
            <ProjectDescriptionStyles variant={"secondary"}>
              On the backend, the server runs a cron job every 30 minutes,
              checking for content that should be set to active. Once set to
              active, it will display on the corresponding user’s website.
            </ProjectDescriptionStyles>
          </Column>

          {desktop && (
            <ImageContainer>
              <FramedImage
                src={
                  "https://oceanapps.nyc3.cdn.digitaloceanspaces.com/screenshots/design-studio-screenshot-optimized.png"
                }
                alt={"Content Scheduler Screenshot"}
              />
            </ImageContainer>
          )}
        </Row>
      </InnerContainer>
    </Section>
  );
};

export default HowDoesItWork;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 65em) {
    flex-direction: row;
  }
`;

const InnerContainer = styled(Container)`
  margin: 0 auto;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[7]};
  }
`;

const Section = styled.section`
  width: 100vw;
  background: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing[2]} 0;
  padding-bottom: 0;

  @media screen and (min-width: 65em) {
    padding: ${(props) => props.theme.spacing[6]} 0;
    padding-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-family: Migra, sans-serif;
  color: ${(props) => props.theme.colors.primary};
  font-size: 2.4rem;
  margin-bottom: ${(props) => props.theme.spacing[3]};

  @media screen and (min-width: 65em) {
    font-size: 3.6rem;
  }
`;

const ImageContainer = styled.div`
  min-width: 30rem;
  width: 100%;

  margin-bottom: ${(props) => props.theme.spacing[5]};

  @media screen and (min-width: 65em) {
    padding-left: ${(props) => props.theme.spacing[8]};
    max-width: 40em;
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
