import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

const FramedImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <Container>
      <Frame>
        <FrameAccent>
          <Image src={src} alt={alt} />
        </FrameAccent>
      </Frame>
    </Container>
  );
};

export default FramedImage;

const Container = styled.div`
  width: calc(100% - 1rem);
  margin-left: 1rem;
  padding-bottom: ${(props) => props.theme.spacing[4]};
`;

const Frame = styled.div`
  position: relative;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  height: 30rem;
  z-index: 2;
  background: ${(props) => props.theme.colors.primary};
`;

const FrameAccent = styled.div`
  position: absolute;
  height: inherit;
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
