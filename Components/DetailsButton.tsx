import React from "react";
import styled from "styled-components";
import { DetailsButtonVariant } from "../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  children?: React.ReactNode;
  variant?: DetailsButtonVariant;
  onClick: React.MouseEventHandler;
}

const DetailsButton: React.FC<Props> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  return (
    <ButtonStyles onClick={onClick} variant={variant}>
      <span>{children}</span>
      <IconContainer variant={variant}>
        <ArrowForwardIcon style={{ color: "inherit", fontSize: "inherit" }} />
      </IconContainer>
    </ButtonStyles>
  );
};

export default DetailsButton;

const ButtonStyles = styled.button<{ variant: DetailsButtonVariant }>`
  width: fit-content;
  border: none;
  background: transparent;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  font-family: "PP Neue Montreal", sans-serif;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[2]};
    transition: margin-right 0.2s ease;

    &:hover {
      margin-right: ${(props) => props.theme.spacing[3]};
    }
  }
`;

const IconContainer = styled.span<{ variant: DetailsButtonVariant }>`
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
