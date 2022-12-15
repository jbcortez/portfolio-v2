import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Container,
  SectionTitle,
  PrimaryBackground,
} from "../../styles/Components";
import { useMediaQuery } from "@mui/material";

// eslint-disable-next-line react/display-name
const Skills = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  ({}, ref) => {
    const [width, setWidth] = useState<number>(0);
    const [rendered, setRendered] = useState<boolean>(false);
    const [hover, setHover] = useState(false);

    const matches = useMediaQuery("(min-width:65em)");
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasRendered = useRef<boolean>(false);

    const handleMouseOver = () => {
      setHover(true);
    };

    const handleMouseLeave = () => {
      setHover(false);
    };

    useEffect(() => {
      if (rendered) {
        const div = sectionRef.current;
        if (div) setWidth(div.getBoundingClientRect().width);
      }
    }, [rendered]);

    useEffect(() => {
      if (hasRendered.current) {
        setRendered(true);
      }

      return () => {
        hasRendered.current = true;
      };
    }, []);

    return (
      <Section id={"skills"} ref={ref}>
        <SectionTitle variant={"primary"}>Skills</SectionTitle>
        <PrimaryBackground>
          {matches ? (
            <>
              <InnerContainer>
                <SpaceBetween ref={sectionRef}>
                  <Span
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    hover={hover}
                    width={width}
                  >
                    <Skill>React</Skill>
                    <Skill>TypeScript</Skill>
                    <Skill>Javascript</Skill>
                    <Skill>Sass</Skill>
                    <Skill>Node</Skill>
                    <Skill>MongoDB</Skill>
                    <Skill>Cypress</Skill>
                    <Skill>Figma</Skill>
                    <Skill>React</Skill>
                    <Skill>TypeScript</Skill>
                    <Skill>Javascript</Skill>
                    <Skill>Sass</Skill>
                    <Skill>Node</Skill>
                    <Skill>MongoDB</Skill>
                    <Skill>Cypress</Skill>
                    <Skill>Figma</Skill>
                    <Skill>React</Skill>
                    <Skill>TypeScript</Skill>
                    <Skill>Javascript</Skill>
                    <Skill>Sass</Skill>
                    <Skill>Node</Skill>
                    <Skill>MongoDB</Skill>
                    <Skill>Cypress</Skill>
                    <Skill>Figma</Skill>
                  </Span>
                </SpaceBetween>
              </InnerContainer>
              <Divider />
              <InnerContainer>
                <SpaceBetween>
                  <ReverseSpan
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    hover={hover}
                    width={width}
                  >
                    <Skill rotate={"true"}>React</Skill>
                    <Skill rotate={"true"}>TypeScript</Skill>
                    <Skill rotate={"true"}>Javascript</Skill>
                    <Skill rotate={"true"}>Sass</Skill>
                    <Skill rotate={"true"}>Node</Skill>
                    <Skill rotate={"true"}>MongoDB</Skill>
                    <Skill rotate={"true"}>Cypress</Skill>
                    <Skill rotate={"true"}>Figma</Skill>
                    <Skill rotate={"true"}>React</Skill>
                    <Skill rotate={"true"}>TypeScript</Skill>
                    <Skill rotate={"true"}>Javascript</Skill>
                    <Skill rotate={"true"}>Sass</Skill>
                    <Skill rotate={"true"}>Node</Skill>
                    <Skill rotate={"true"}>MongoDB</Skill>
                    <Skill rotate={"true"}>Cypress</Skill>
                    <Skill rotate={"true"}>Figma</Skill>
                    <Skill rotate={"true"}>React</Skill>
                    <Skill rotate={"true"}>TypeScript</Skill>
                    <Skill rotate={"true"}>Javascript</Skill>
                    <Skill rotate={"true"}>Sass</Skill>
                    <Skill rotate={"true"}>Node</Skill>
                    <Skill rotate={"true"}>MongoDB</Skill>
                    <Skill rotate={"true"}>Cypress</Skill>
                    <Skill rotate={"true"}>Figma</Skill>
                  </ReverseSpan>
                </SpaceBetween>
              </InnerContainer>
            </>
          ) : (
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
          )}
        </PrimaryBackground>
      </Section>
    );
  }
);

export default Skills;

const Section = styled.section`
  width: 100vw;
  background: ${(props) => props.theme.colors.secondary};
  padding-bottom: ${(props) => props.theme.spacing[9]};
`;

const Divider = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.colors.secondary};
  height: 2rem;
`;

const InnerContainer = styled(Container)`
  padding: ${(props) => props.theme.spacing[4]} 2rem;
  max-width: 120rem;
  margin: 0 auto;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[3]};
  }
`;

const Skill = styled.span<{ rotate?: string }>`
  font-family: "PP Migra", sans-serif;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.secondary};
  transform: rotate(${(props) => (props.rotate === "true" ? "180deg" : "0")});
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  & > *:not(:last-child) {
    padding-right: ${(props) => props.theme.spacing[3]};
  }
`;

const SpaceBetween = styled.div`
  display: flex;
`;

const Span = styled.span<{
  width?: number;
  hover: boolean;
}>`
  display: inline-block;
  animation: ${(props) =>
    props.width && `scroll  ${props.width / 150}s linear infinite`};
  animation-play-state: ${(props) => (props.hover ? "paused" : "running")};

  & > *:not(:last-child) {
    padding-right: ${(props) => props.width && props.width / 20}px;
  }

  @keyframes scroll {
    from {
      transform: translateX(-44%);
    }
    to {
      transform: translateX(-10%);
    }
  }
`;

const ReverseSpan = styled(Span)`
  animation: ${(props) =>
    props.width && `reverseScroll  ${props.width / 150}s linear infinite`};
  animation-play-state: ${(props) => (props.hover ? "paused" : "running")};

  @keyframes reverseScroll {
    from {
      transform: translateX(-10%) rotate(180deg);
    }
    to {
      transform: translateX(-44%) rotate(180deg);
    }
  }
`;
