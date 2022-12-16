import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import { Container, Text, Column } from "../../styles/Components";

// eslint-disable-next-line react/display-name
const Hero = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <ContainerStyles ref={ref}>
        <InnerContainer>
          <Column>
            <Subheading>Hello, I'm Justin. I am a</Subheading>
            <Heading>Frontend</Heading>
            <Heading>Developer.</Heading>
          </Column>
          <RightColumn>
            <TextContent variant={"primary"}>
              I specialize in React and Typescript, but know my way around the
              backend. I have a passion for web technologies and love a
              challenge.
            </TextContent>
            <FlexEnd>
              <Button>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={"/justin_cortez_resume.pdf"}
                >
                  {"View Resume"}
                </a>
              </Button>
            </FlexEnd>
          </RightColumn>
        </InnerContainer>
      </ContainerStyles>
    );
  }
);
export default Hero;

const ContainerStyles = styled(Container)`
  padding: 0 2rem;
  height: 100vh;
  max-height: 100rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100rem;
  justify-content: center;
  padding-top: 6rem;
  margin: 0 auto;
  @media screen and (min-width: 65em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Heading = styled.h1`
  font-family: "Tusker Grotesk 2600 Semibold", sans-serif;
  font-size: clamp(14rem, 35vw, 20rem);
  line-height: 1;
  text-transform: uppercase;
`;

const Subheading = styled.h2`
  font-family: "PP Migra", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  padding-bottom: ${(props) => props.theme.spacing[3]};
  padding-left: ${(props) => props.theme.spacing[1]};

  @media screen and (min-width: 31em) {
    font-size: 2.4rem;
  }
`;

const FlexEnd = styled.div`
  margin-top: ${(props) => props.theme.spacing[6]};
  display: flex;
  width: 100%;

  @media screen and (min-width: 65em) {
    justify-content: flex-end;
  }
`;

const TextContent = styled(Text)`
  text-transform: uppercase;
  width: 100%;
  font-size: clamp(1.6rem, 3vw, 2rem);
  max-width: 50rem;

  @media screen and (min-width: 65em) {
    text-align: right;
  }
`;

const RightColumn = styled(Column)`
  justify-content: flex-start;

  @media screen and (min-width: 65em) {
    justify-content: flex-end;
    padding-top: 25rem;
  }
`;
