import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/reduxHooks";
import { debounce } from "lodash";

const CursorOrnament: React.FC = () => {
  const [clientX, setClientX] = useState<number>(0);
  const [clientY, setClientY] = useState<number>(0);
  const [wait, setWait] = useState<any>(null);

  const isInteractive = useAppSelector((state) => state.site.interactiveItem);

  const saveMousePosition = (e: MouseEvent) => {
    setClientX(e.pageX);
    setClientY(e.pageY);
    console.log("mouse position saved");
  };

  const throttle = (e: MouseEvent) => {
    console.log("running");

    if (wait) return;

    setWait(
      setTimeout(() => {
        if (e) saveMousePosition(e);
        setWait(false);
      }, 1000)
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", throttle);

    return () => {
      window.removeEventListener("mousemove", throttle);
    };
  }, [throttle]);

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
    top: props.y + "px",
    left: props.x + "px",
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
  top: ${(props) => (props.interactive ? "-1.5rem" : "-2.5rem")};
  left: ${(props) => (props.interactive ? "-1.5rem" : "-2.5rem")};
  filter: invert(1);
  mix-blend-mode: difference;
  transition: all 0.4s ease-out;
  z-index: 100000;
  pointer-events: none;
`;
