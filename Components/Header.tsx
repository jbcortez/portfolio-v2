import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { Container, SecondaryLink } from "../styles/Components";
import { useMediaQuery } from "@mui/material";
import { handleIsInteractive } from "../util/functions";
import { useAppDispatch } from "../redux/reduxHooks";
import Link from "next/link";

const Header: React.FC = () => {
  const desktop = useMediaQuery("(min-width: 55em)");
  const showTitle = useMediaQuery("(min-width: 40rem");
  const dispatch = useAppDispatch();

  const handleMouseOver = () => {
    handleIsInteractive(dispatch, true);
  };

  const handleMouseLeave = () => {
    handleIsInteractive(dispatch, false);
  };

  return (
    <HeaderStyles>
      <ContainerStyles>
        <Row>
          <Link href={"/"}>
            <Logo>Justin Cortez</Logo>
          </Link>
          {showTitle && <SecondaryLogo>Frontend Developer</SecondaryLogo>}
        </Row>

        {desktop ? (
          <NavLinks>
            <NavLink
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <LinkNumber>01.</LinkNumber> <span>Projects</span>
            </NavLink>
            <NavLink
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <LinkNumber>02.</LinkNumber> <span>About Me</span>
            </NavLink>
            <NavLink
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <LinkNumber>03.</LinkNumber> <span>Contact</span>
            </NavLink>
            <NavLink
              highlight={true}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <LinkNumber>04.</LinkNumber> <Highlight>Resume</Highlight>
            </NavLink>
          </NavLinks>
        ) : (
          <Hamburger />
        )}
      </ContainerStyles>
      <Divider />
    </HeaderStyles>
  );
};

export default Header;

const Row = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[6]};
  }
`;

const HeaderStyles = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 6rem;
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
  max-width: 120rem;
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
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
`;

const SecondaryLogo = styled(Logo)`
  font-family: "PP Neue Montreal", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.4rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
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

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[6]};
  }
`;

const NavLink = styled.span<{ highlight?: boolean }>`
  font-family: "PP Neue Montreal", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);

  &::after {
    position: absolute;
    content: "";
    bottom: -2px;
    left: 0;
    height: 1px;
    background: ${(props) =>
      props.highlight
        ? props.theme.colors.tertiary
        : props.theme.colors.primary};
    width: 0;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[1]};
  }
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: 700;
`;

const LinkNumber = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: "PP Migra", sans-serif;
  font-size: 1.3rem;
  margin-bottom: -0.3rem;
`;
