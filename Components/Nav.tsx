import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import ArrowSVG from "./ArrowSVG";
import { SecondaryLink } from "../styles/Components";

const Nav: React.FC = () => {
  return (
    <NavBar>
      <NavLink number={"01."}>Skills</NavLink>
      <NavLink number={"02."} extended={true}>
        Projects
      </NavLink>
      <NavLink number={"03."}>About</NavLink>
      <NavLink number={"04."}>Contact</NavLink>
      <NavLink number={"05."} highlight={true}>
        Resume
      </NavLink>
      <SecondaryLinkContainer>
        <SecondaryLink>
          <ArrowSVG />
          <span>LinkedIn</span>
        </SecondaryLink>
        <SecondaryLink>
          <ArrowSVG />
          <span>GitHub</span>
        </SecondaryLink>
      </SecondaryLinkContainer>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.secondary};
  z-index: 1;
  padding: 4rem;
`;

const SecondaryLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: ${(props) => props.theme.spacing[3]};
  width: 14rem;
  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[2]};
  }
`;
