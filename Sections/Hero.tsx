import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import { Container, Text } from "../styles/Components";

const Hero: React.FC = () => {
  const handleContact = () => {};

  return (
    <ContainerStyles>
      <InnerContainer>
        <Subheading>Hello, I'm Justin. I am a</Subheading>
        <Heading>Frontend</Heading>
        <Heading>
          Developer<Highlight>.</Highlight>
        </Heading>
        <Text style={{ textTransform: "uppercase" }} variant={"primary"}>
          I specialize in React and Typescript, but know my way around the
          backend. I have a passion for web technologies and love a challenge.
        </Text>
        <FlexEnd>
          <Button translateVariant={"one"} onClick={handleContact}>
            {"View Resume"}
          </Button>
        </FlexEnd>
      </InnerContainer>
    </ContainerStyles>
  );
};

export default Hero;

const ContainerStyles = styled(Container)`
  padding: 0 2rem;
  height: 100vh;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: calc(50% + 3.3rem);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-family: "Tusker Grotesk 2600 Semibold", sans-serif;
  font-size: 165px;
  line-height: 1;
  text-transform: uppercase;
`;

const Subheading = styled.h2`
  font-family: "PP Migra", sans-serif;
  font-weight: 400;
  font-size: 20px;
  padding-bottom: ${(props) => props.theme.spacing[2]};
`;

const FlexEnd = styled.div`
  margin-top: ${(props) => props.theme.spacing[6]};
  margin-right: auto;
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
`;
