// Currently disabled due to lag issues in firefox. Possible solution is throttling mousemove event.

import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/reduxHooks";

const CursorOrnament: React.FC = () => {
  const [clientX, setClientX] = useState<number>(0);
  const [clientY, setClientY] = useState<number>(0);

  const isInteractive = useAppSelector((state) => state.site.interactiveItem);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setClientX(e.pageX);
    setClientY(e.pageY);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <Container
      clientY={clientY}
      x={clientX}
      y={clientY}
      interactive={isInteractive}
    ></Container>
  );
};

export default CursorOrnament;

const Container = styled.div.attrs<{
  x: number;
  y: number;
  interactive: boolean;
}>((props) => ({
  style: {
    // transform: `translate3d(${props.x}px, ${props.y}px, 1px) `,
    top: props.y - 25 + "px",
    left: props.x - 25 + "px",
  },
}))<{ x: number; y: number; interactive: boolean; clientY: number }>`
  width: ${(props) => (props.interactive ? "3rem" : "5rem")};
  height: ${(props) => (props.interactive ? "3rem" : "5rem")};
  border-radius: 25px;
  background-color: ${(props) => (props.interactive ? "#ddd" : "#000")};
  opacity: ${(props) => (props.clientY < 900 ? "1" : "0")};
  display: ${(props) =>
    props.x && props.y && props.clientY ? "block" : "none"};
  position: absolute;
  filter: invert(1);
  mix-blend-mode: difference;
  transition: opacity 500ms ease;
  z-index: 100000;
  pointer-events: none;
`;
