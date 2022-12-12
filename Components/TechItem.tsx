import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import styled from "styled-components";

interface Props {
  tech: string;
  variant: "primary" | "secondary";
  style?: React.CSSProperties;
}

const TechItem: React.FC<Props> = ({ tech, variant, style }) => {
  return (
    <Tech style={style} variant={variant}>
      <CodeIcon
        style={{
          fontSize: "inherit",
          color: "inherit",
          marginRight: "1rem",
        }}
      />
      <span>{tech}</span>
    </Tech>
  );
};
export default TechItem;

const Tech = styled.div<{ variant: "primary" | "secondary" }>`
  font-family: "PP Migra", sans-serif;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  font-size: 1.8rem;
  display: flex;

  @media screen and (min-width: 65em) {
    font-size: 2.4rem;
  }
`;
