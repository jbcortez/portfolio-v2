import React from 'react';
import FramedImage from '../../Components/FramedImage';
import styled from 'styled-components';
import { Container } from '../../styles/Components';
import {
  ProjectDescription,
  ProjectSectionTitle,
} from '../../styles/Components';

const Hero = () => {
  return (
    <Section>
      <InnerContainer>
        <Title>Content Scheduler</Title>
        <Column>
          <ImageContainer>
            <FramedImage
              src={
                'https://oceanapps.nyc3.cdn.digitaloceanspaces.com/screenshots/fall-sale-2.png'
              }
              alt={'Content Scheduler Screenshot'}
            />
          </ImageContainer>

          <ProjectSectionTitle>Summary</ProjectSectionTitle>
          <ProjectDescriptionStyles variant={'secondary'}>
            Our application, built specifically for Wix, gives small business
            owners the freedom to easily design and schedule content updates on
            their website through a dynamic widget. We designed this tool with
            the busy schedules of small business owners in mind, streamlining
            their website update process.
          </ProjectDescriptionStyles>
        </Column>
      </InnerContainer>
    </Section>
  );
};

export default Hero;

const InnerContainer = styled(Container)`
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  width: 100vw;
  padding-bottom: ${(props) => props.theme.spacing[4]};

  @media screen and (min-width: 65em) {
    padding-top: ${(props) => props.theme.spacing[4]};
    padding-bottom: ${(props) => props.theme.spacing[6]};
  }
`;

const ImageContainer = styled.div`
  min-width: 30rem;
  width: 100%;
  max-width: 120rem;
  margin-bottom: ${(props) => props.theme.spacing[5]};
`;

const ProjectDescriptionStyles = styled(ProjectDescription)`
  margin-bottom: 0;
  max-width: 60rem;

  @media screen and (min-width: 65em) {
    font-size: 1.6rem;
  }
`;

const Title = styled.h2`
  font-family: 'Tusker Grotesk 3600 Semibold', sans-serif;
  font-size: 4rem;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  width: 100%;
  text-align: left;
  margin-bottom: ${(props) => props.theme.spacing[3]};

  @media screen and (min-width: 65em) {
    font-size: 7rem;
    margin-bottom: ${(props) => props.theme.spacing[6]};
  }
`;
