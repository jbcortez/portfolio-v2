import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import ArrowSVG from "./ArrowSVG";
import { SecondaryLink } from "../styles/Components";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { handleNavMenu } from "../util/functions";
import { NAV_ANIMATION_DURATION } from "../util/enums";
import { ThemeType } from "../types";
import { useRouter } from "next/router";
import Link from "next/link";
import useIsHomepage from "../hooks/useIsHomepage";

interface Props {
  pageRefs?: React.RefObject<HTMLElement>[];
}

const Nav: React.FC<Props> = ({ pageRefs = [] }) => {
  const dispatch = useAppDispatch();

  const showNav = useAppSelector((state) => state.site.showNav);
  const exitAnimation = useAppSelector((state) => state.site.navExitAnimation);
  const themeMode = useAppSelector((state) => state.site.theme);
  const [heroRef, skillsRef, projectsRef, aboutRef, contactRef] = pageRefs;
  const isHomepage = useIsHomepage();

  const handleHeroLink = () => {
    handleNavMenu(dispatch, showNav);

    setTimeout(() => {
      if (heroRef?.current)
        heroRef.current.scrollIntoView({ behavior: "smooth" });
    }, NAV_ANIMATION_DURATION);
  };

  const handleProjectsLink = () => {
    handleNavMenu(dispatch, showNav);

    if (isHomepage) {
      setTimeout(() => {
        if (projectsRef?.current)
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
      }, NAV_ANIMATION_DURATION);
    }
  };

  const handleAboutLink = () => {
    handleNavMenu(dispatch, showNav);

    if (isHomepage)
      setTimeout(() => {
        if (aboutRef?.current)
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }, NAV_ANIMATION_DURATION);
  };

  const handleContactLink = () => {
    handleNavMenu(dispatch, showNav);

    if (isHomepage)
      setTimeout(() => {
        if (contactRef?.current)
          contactRef.current.scrollIntoView({ behavior: "smooth" });
      }, NAV_ANIMATION_DURATION);
  };

  return (
    <NavBar exitAnimation={exitAnimation} mode={themeMode}>
      {isHomepage ? (
        <>
          <a onClick={handleProjectsLink}>
            <NavLink number={"01."} extended={true}>
              Projects
            </NavLink>
          </a>
          <a onClick={handleAboutLink}>
            <NavLink number={"02."}>About</NavLink>
          </a>
          <a onClick={handleContactLink}>
            <NavLink number={"03."}>Contact</NavLink>
          </a>
        </>
      ) : (
        <>
          <Link href={"/#projects"} onClick={handleProjectsLink}>
            <NavLink number={"01."} extended={true}>
              Projects
            </NavLink>
          </Link>
          <Link href={"/#about"} onClick={handleAboutLink}>
            <NavLink number={"02."}>About</NavLink>
          </Link>
          <Link href={"/#contact"} onClick={handleContactLink}>
            <NavLink number={"03."}>Contact</NavLink>
          </Link>
        </>
      )}
      <NavLink number={"04."} highlight={true}>
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

const NavBar = styled.nav<{ exitAnimation: boolean; mode: ThemeType }>`
  position: fixed;
  top: 0;
  left: 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) =>
    props.mode === "dark" ? "rgba(0, 0, 0, 0.2)" : "rgba(255,255,255,.2)"};
  backdrop-filter: blur(20px);
  z-index: 3;
  padding: 4rem;

  animation: ${(props) => (props.exitAnimation ? "slideOut" : "slideIn")} 250ms
    forwards ease;

  @keyframes slideIn {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }

  @keyframes slideOut {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }
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
