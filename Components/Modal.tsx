import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  color: ${(props) => props.theme.colors.primary};
  backdrop-filter: blur(7px);
  background-blend-mode: difference;
  z-index: 2;
  padding: ${(props) => props.theme.spacing[5]};
  background: ${(props) => props.theme.colors.secondary};
  border: 3px solid ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 1.8rem;
`;
