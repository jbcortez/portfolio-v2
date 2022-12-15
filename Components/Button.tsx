import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/reduxHooks";
import { handleIsInteractive } from "../util/functions";

interface Props {
  fill?: "true" | "false";
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({
  fill = "false",
  onClick,
  children,
  style,
  variant = "primary",
  type,
}) => {
  const [hover, setHover] = useState<"true" | "false">("false");
  const [width, setWidth] = useState<number>(0);
  const dispatch = useAppDispatch();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (hover === "false" && btn) {
      setWidth(btn.getBoundingClientRect().width);
    }
  }, [hover]);

  const handleMouseOver = () => {
    setHover("true");
    handleIsInteractive(dispatch, true);
  };

  const handleMouseLeave = () => {
    setHover("false");
    handleIsInteractive(dispatch, false);
  };

  const render = () => {
    switch (variant) {
      case "primary":
        return (
          <PrimaryStyles
            type={type}
            hover={hover}
            ref={btnRef}
            style={style}
            fill={fill}
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
            onClick={onClick}
            width={width}
          >
            {hover === "true" ? (
              <>
                <Span hover={hover} width={width}>
                  <span>{children}</span>
                  <span>{children}</span>
                </Span>
              </>
            ) : (
              <>{children}</>
            )}
          </PrimaryStyles>
        );
      case "secondary":
        return (
          <SecondaryStyles
            hover={hover}
            ref={btnRef}
            style={style}
            fill={fill}
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
            onClick={onClick}
            width={width}
          >
            {hover === "true" ? (
              <>
                <Span hover={hover} width={width}>
                  <span>{children}</span>
                  <span>{children}</span>
                </Span>
              </>
            ) : (
              <>{children}</>
            )}
          </SecondaryStyles>
        );
      default:
        return;
    }
  };

  return <>{render()}</>;
};

export default Button;

const ButtonStyles = styled.button<{
  fill: "true" | "false";
  hover: "true" | "false";
  width: number;
  type?: "button" | "submit" | "reset";
}>`
  text-transform: uppercase;
  font-size: 2rem;
  display: flex;
  white-space: nowrap;
  border-radius: 2.5rem;
  padding: 0.8rem 1.4rem;
  cursor: pointer;
  overflow: hidden;
  width: ${(props) => (props.width ? props.width + "px" : "fit-content")};
`;

const PrimaryStyles = styled(ButtonStyles)`
  color: ${(props) =>
    props.fill === "true"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  background: ${(props) =>
    props.fill === "true"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const SecondaryStyles = styled(ButtonStyles)`
  color: ${(props) =>
    props.fill === "true"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  background: ${(props) =>
    props.fill === "true"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.secondary};
`;

const Span = styled.span<{
  hover: "true" | "false";
  width: number;
}>`
  display: block;
  animation: buttonScroll ${(props) => props.width / 150}s linear infinite;

  & > *:not(:last-child) {
    padding-right: ${(props) => props.width / 10}px;
  }

  @keyframes buttonScroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-53.5%);
    }
  }
`;
