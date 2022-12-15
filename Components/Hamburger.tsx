import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { setShowNav, showNavExitAnimation } from "../redux/siteSlice";
import { handleIsInteractive } from "../util/functions";
import { NAV_ANIMATION_DURATION } from "../util/enums";

const Hamburger: React.FC = () => {
  const showNav = useAppSelector((state) => state.site.showNav);
  const [hover, setHover] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const hasBeenActivated = useRef<boolean>(false);

  const handleMouseOver = () => {
    handleIsInteractive(dispatch, true);
    setHover(true);
  };

  const handleMouseLeave = () => {
    handleIsInteractive(dispatch, false);
    setHover(false);
  };

  const toggleActive = (e: React.MouseEvent) => {
    if (showNav) {
      dispatch(showNavExitAnimation({ showNavExitAnimation: true }));
      setTimeout(() => {
        dispatch(setShowNav({ showNav: false }));
        dispatch(showNavExitAnimation({ showNavExitAnimation: false }));
      }, NAV_ANIMATION_DURATION);
    } else {
      dispatch(setShowNav({ showNav: true }));
    }
    hasBeenActivated.current = true;
  };

  return (
    <Container
      active={showNav}
      hover={hover}
      onClick={toggleActive}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Icon
        hover={hover}
        active={showNav}
        hasBeenActivated={hasBeenActivated.current}
      />
    </Container>
  );
};

export default Hamburger;

const Container = styled.div<{ hover: boolean; active: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: ${(props) => (props.hover && !props.active ? "2.5rem" : "3rem")};
  transform: ${(props) =>
    props.hover && !props.active && "translateX(-.25rem)"};
  transition: all 0.2s ease;
`;

const Icon = styled.div<{
  active: boolean;
  hasBeenActivated: boolean;
  hover: boolean;
}>`
  width: 100%;
  height: 0.3rem;
  border-radius: 0.5rem;
  transform-origin: left center;
  background: ${(props) =>
    props.hasBeenActivated ? "transparent" : props.theme.colors.primary};
  position: relative;
  transition: all 0.2s ease;
  animation: ${(props) =>
      props.hasBeenActivated
        ? props.active
          ? "fadeOut .1s ease"
          : "fadeIn .5s ease"
        : "none"}
    forwards;
  animation-delay: ${(props) => (props.active ? "0" : ".2s")};

  &::before {
    position: absolute;
    top: ${(props) => (props.active ? "0" : "1rem")};
    height: 0.3rem;
    border-radius: 0.5rem;
    width: ${(props) => (props.hover && !props.active ? "2.5rem" : "3rem")};
    content: "";
    background: ${(props) => props.theme.colors.primary};
    transform: rotate(${(props) => (props.active ? "45deg" : "0")});
    transition: all 0.2s ease;
  }

  &::after {
    position: absolute;
    top: ${(props) => (props.active ? "0" : "-1rem")};
    height: 0.3rem;
    border-radius: 0.5rem;
    width: ${(props) => (props.hover && !props.active ? "2.5rem" : "3rem")};
    content: "";
    background: ${(props) => props.theme.colors.primary};
    transform: rotate(${(props) => (props.active ? "-45deg" : "0")});
    transition: all 0.2s ease;
  }

  @keyframes fadeOut {
    from {
      background: ${(props) => props.theme.colors.primary};
    }
    to {
      background: transparent;
    }
  }

  @keyframes fadeIn {
    from {
      background: transparent;
    }
    to {
      background: ${(props) => props.theme.colors.primary};
    }
  }
`;
