import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/Components";
import SecondaryLink from "../../Components/SecondaryLink";
import Button from "../../Components/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <Section>
      <InnerContainer>
        <Column>
          <SecondaryLink
            url={"https://www.github.com/jbcortez/design-studio-demo"}
            variant={"primary"}
          >
            Github
          </SecondaryLink>
          <SecondaryLink
            url={"https://www.github.com/jbcortez/design-studio-demo"}
            variant={"primary"}
          >
            Wix App Market Listing
          </SecondaryLink>
        </Column>
        <Link href={"/"}>
          <Button>Back to projects</Button>
        </Link>
      </InnerContainer>
    </Section>
  );
};

export default Footer;

const InnerContainer = styled(Container)`
  margin: 0 auto;
`;

const Section = styled.section`
  width: 100vw;
  background: ${(props) => props.theme.colors.secondary};
  padding-bottom: ${(props) => props.theme.spacing[7]};
`;

const Column = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[5]};

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[2]};
  }

  @media screen and (min-width: 65em) {
    margin-bottom: ${(props) => props.theme.spacing[6]};
  }
`;
