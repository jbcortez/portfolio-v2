import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

const FramedImage: React.FC<Props> = ({ src, alt }) => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const frame = frameRef.current;

    if (frame) {
      setHeight(frame.offsetHeight);
    }
  }, []);

  const handleResize = () => {
    if (frameRef.current) {
      setHeight(frameRef.current?.getBoundingClientRect().height);
    }
  };

  return (
    <Container>
      <FrameAccent height={height}>
        <Frame ref={frameRef}>
          <Image src={src} alt={alt} />
        </Frame>
      </FrameAccent>
    </Container>
  );
};

export default FramedImage;

const Container = styled.div`
  width: 100%;
  margin-left: 1rem;
  padding-bottom: ${(props) => props.theme.spacing[4]};
`;

const FrameAccent = styled.div<{ height?: number }>`
  position: relative;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  height: ${(props) => props.height}px;
  z-index: 2;
  background: ${(props) => props.theme.colors.primary};
  width: calc(100% - 1rem);
`;

const Frame = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing[3]};
  top: 1rem;
  left: -1rem;
  border-radius: 5px;
  z-index: 1;
  background: ${(props) => props.theme.colors.primary};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;
