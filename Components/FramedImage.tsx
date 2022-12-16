import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

const FramedImage: React.FC<Props> = ({ src, alt }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      setHeight(node.offsetHeight);
    }
  }, []);

  return (
    <Container height={height} ref={ref}>
      <Image src={src} alt={alt} />
    </Container>
  );
};

export default FramedImage;

const Container = styled.div<{ height: number }>`
  width: 100%;
  padding-bottom: ${(props) => props.theme.spacing[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing[3]};
  border-radius: 7px;
  z-index: 1;
  background: ${(props) => props.theme.colors.primary};
  transition: all 500ms ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;
