import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2<{ variant: "primary" | "secondary" }>`
  font-family: "Tusker Grotesk 3600 Semibold", sans-serif;
  font-size: 4rem;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[3]};
`;

export const ProjectTitle = styled.h3<{ variant: "primary" | "secondary" }>`
  font-family: Migra, sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing[2]};
  line-height: 1;
`;

export const PrimaryBackground = styled.div`
  background: ${(props) => props.theme.colors.primary};
  width: 100vw;
`;

export const ProjectDescription = styled.p<{
  variant: "primary" | "secondary";
}>`
  font-size: 1.6rem;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  font-family: "PP Neue Montreal", sans-serif;
  font-weight: 400;
  line-height: 133%;
  margin-bottom: ${(props) => props.theme.spacing[4]};
`;

export const Text = styled.p<{ variant: "primary" | "secondary" }>`
  margin-top: ${(props) => props.theme.spacing[5]};
  font-size: 1.6rem;
  max-width: calc(100vw - 4rem);
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  line-height: 1.3;
`;
