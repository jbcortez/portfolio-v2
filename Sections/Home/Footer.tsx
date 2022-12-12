import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/Components";
import Button from "../../Components/Button";
import SecondaryLink from "../../Components/SecondaryLink";

const Footer = () => {
  return (
    <FooterStyles>
      <InnerContainer>
        <Column>
          <Button fill={"true"}>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"/justin_cortez_resume.pdf"}
            >
              {"View Resume"}
            </a>
          </Button>
          <Button fill={"true"}>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"mailto:justin.b.cortez@gmail.com"}
            >
              {"Email Me"}
            </a>
          </Button>
          <SecondaryLinkContainer>
            <SecondaryLink
              reverse={true}
              variant={"primary"}
              url={"https://www.linkedin.com/in/justin-cortez-341765146/"}
            >
              LinkedIn
            </SecondaryLink>
            <SecondaryLink
              reverse={true}
              variant={"primary"}
              url={"https://www.github.com/jbcortez"}
            >
              Github
            </SecondaryLink>
          </SecondaryLinkContainer>
        </Column>
      </InnerContainer>
    </FooterStyles>
  );
};

export default Footer;

const FooterStyles = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing[6]} 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[5]};
  }

  @media screen and (min-width: 45em) {
    align-items: flex-end;
  }
`;

const SecondaryLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[3]};
  }

  @media screen and (min-width: 45em) {
    align-items: flex-end;
  }
`;

const InnerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
