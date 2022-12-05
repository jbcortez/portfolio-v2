import React from "react";
import useTheme from "../hooks/useTheme";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
  hover: boolean;
  extended?: boolean;
}

const UnderlineSVG: React.FC<Props> = ({ hover, style, extended = true }) => {
  const theme = useTheme();
  return (
    <SVG
      style={{ position: "absolute", bottom: "-5px", left: "0" }}
      width={321}
      height="40"
      viewBox="0 0 329 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={hover ? "1" : "0"}
    >
      <line
        y1="28.5"
        x2={extended ? "361" : "320"}
        y2="28.5"
        stroke={theme?.colors.primary}
        strokeWidth={"3"}
      />
      <rect
        x={extended ? "200" : "159"}
        y="20"
        width="162"
        height="9"
        fill={theme?.colors.primary}
      />
      <path
        className={extended ? "triangle" : ""}
        d="M159 20L165.062 29.75H152.938L159 20Z"
        fill={theme?.colors.primary}
      />
      <rect
        x="320.729"
        width="2.99691"
        height="43.2576"
        transform="rotate(28.6329 320.729 0)"
        fill={theme?.colors.secondary}
      />
      <path
        className={extended ? "triangleTwo" : ""}
        d="M322 20L328.062 31.25H315.938L322 20Z"
        fill={theme?.colors.secondary}
      />
    </SVG>
  );
};

export default UnderlineSVG;

const SVG = styled.svg`
  transition: all 0.5s ease;

  .triangle {
    transform: translateX(41px);
  }

  .triangleTwo {
    transform: translateX(6px);
  }
`;
