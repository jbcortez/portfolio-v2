import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { isItemInteractive } from "../redux/siteSlice";
import { useAppDispatch } from "../redux/reduxHooks";
import { handleIsInteractive } from "../util/functions";

interface Props {
  fill?: "true" | "false";
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
  style?: React.CSSProperties;
  translateVariant?: "one" | "two";
}

const Button: React.FC<Props> = ({
  fill = "false",
  onClick,
  children,
  style,
  translateVariant = "one",
}) => {
  const [hover, setHover] = useState<"true" | "false">("false");
  const dispatch = useAppDispatch();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseOver = () => {
    setHover("true");
    handleIsInteractive(dispatch, true);
  };

  const handleMouseLeave = () => {
    setHover("false");
    handleIsInteractive(dispatch, false);
  };

  return (
    <ButtonStyles
      ref={btnRef}
      style={style}
      fill={fill}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={onClick}
    >
      <Span
        width={btnRef.current?.getBoundingClientRect().width}
        translateVariant={translateVariant}
        hover={hover}
      >
        <span>{children}</span>
        <span>{children}</span>
      </Span>
    </ButtonStyles>
  );
};

export default Button;

const ButtonStyles = styled.button<{
  fill: "true" | "false";
}>`
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) =>
    props.fill === "true"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  background: ${(props) =>
    props.fill === "true"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  text-transform: uppercase;
  font-size: 2rem;
  width: 17.3rem;
  display: flex;
  white-space: nowrap;
  border-radius: 2.5rem;
  padding: 0.8rem 1.4rem;
  cursor: pointer;
  overflow: hidden;
`;

const variantOne = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-53.5%);
  }
`;

const variantTwo = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-56%);
  }
`;

// @ts-ignore
const animation = (props) =>
  css`
    ${props.translateVariant === "one"
      ? variantOne
      : variantTwo} ${props.width / 150}s linear infinite;
  `;

const Span = styled.span<{
  hover: "true" | "false";
  translateVariant: "one" | "two";
  width?: number;
}>`
  display: block;
  animation: ${(props) => props.hover === "true" && animation};

  & > *:not(:last-child) {
    padding-right: 2rem;
  }
`;
