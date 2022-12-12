import React from "react";
import styled from "styled-components";
import ArrowSVG from "./ArrowSVG";
import { SecondaryLink as SecondaryLinkStyles } from "../styles/Components";

interface Props {
  children?: React.ReactNode;
  url: string;
  variant?: "primary" | "secondary";
  reverse?: boolean;
}

const SecondaryLink: React.FC<Props> = ({
  children,
  url,
  variant,
  reverse,
}) => {
  return (
    <SecondaryLinkStyles
      reverse={reverse}
      variant={variant}
      href={url}
      target={"_blank"}
      rel={"noreferrer"}
    >
      <ArrowSVG variant={variant} />
      <Span variant={variant}>{children}</Span>
    </SecondaryLinkStyles>
  );
};

export default SecondaryLink;

const Span = styled.span<{ variant?: "primary" | "secondary" }>`
  font-size: 1.4rem;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  text-transform: uppercase;
  font-family: "Tusker Grotesk 5500 Medium", sans-serif;
  padding-left: ${(props) => props.theme.spacing[2]};
`;
