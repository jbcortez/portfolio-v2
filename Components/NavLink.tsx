import React, { useState } from "react";
import styled from "styled-components";
import UnderlineSVG from "./UnderlineSVG";

interface Props {
  children?: React.ReactNode;
  highlight?: boolean;
  extended?: boolean;
  number: string;
}

const NavLink: React.FC<Props> = ({
  children,
  highlight = false,
  extended = false,
  number,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <NavLinkStyles
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      highlight={highlight}
    >
      <Number>{number}</Number>
      {children}
    </NavLinkStyles>
  );
};

export default NavLink;

const NavLinkStyles = styled.span<{ resume?: boolean; highlight: boolean }>`
  font-family: "Tusker Grotesk 2600 Semibold", sans-serif;
  font-size: 9.6rem;
  text-transform: uppercase;
  line-height: 1.1;
  color: ${(props) => props.highlight && props.theme.colors.tertiary};
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  //width: 30rem;
  width: fit-content;

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 0;
    height: 3px;
    background: ${(props) =>
      props.highlight
        ? props.theme.colors.tertiary
        : props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const Number = styled.span`
  font-family: "PP Migra", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  padding-right: 3px;
`;
