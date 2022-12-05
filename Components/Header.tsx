import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { Container } from "../styles/Components";

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <ContainerStyles>
        <Logo>Justin Cortez</Logo>
        <Hamburger />
        <Divider />
      </ContainerStyles>
    </HeaderStyles>
  );
};

export default Header;

const HeaderStyles = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 7rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  backdrop-filter: blur(7px);
  background-blend-mode: difference;
`;

const ContainerStyles = styled(Container)`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.span`
  font-family: "Migra", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.primary};
  opacity: 0.5;
  position: absolute;
  left: 0;
  bottom: 0;
`;
