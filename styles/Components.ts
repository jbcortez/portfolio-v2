import styled from "styled-components";

export const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 120rem;
  margin: 0 auto;

  @media screen and (min-width: 1220px) {
    padding: 0;
  }
`;

export const ProjectSectionTitle = styled.h3`
  font-family: Migra, sans-serif;
  color: ${(props) => props.theme.colors.primary};
  font-size: 2.4rem;
  margin-bottom: ${(props) => props.theme.spacing[3]};

  @media screen and (min-width: 65em) {
    font-size: 3.6rem;
  }
`;

export const SectionTitle = styled.h2<{
  variant: "primary" | "secondary";
  align?: "center" | "left" | "right";
}>`
  font-family: "Tusker Grotesk 3600 Semibold", sans-serif;
  font-size: 4rem;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  text-transform: uppercase;
  width: 100%;
  text-align: ${(props) => (props.align ? props.align : "center")};
  margin-bottom: ${(props) => props.theme.spacing[3]};

  @media screen and (min-width: 65em) {
    line-height: 1.1;
    font-size: 6rem;
    margin-bottom: ${(props) => props.theme.spacing[6]};
  }
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

export const SecondaryBackground = styled.div`
  background: ${(props) => props.theme.colors.secondary};
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

export const SecondaryLink = styled.a<{
  variant?: "primary" | "secondary";
  reverse?: boolean;
}>`
  font-family: "Tusker Grotesk 5500 Medium", sans-serif;
  font-size: 1.6rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: ${(props) => props.reverse && "row-reverse"};
  align-items: center;
  cursor: pointer;
  position: relative;
  width: fit-content;

  &::after {
    position: absolute;
    content: "";
    bottom: -2px;
    left: 5px;
    height: 1px;
    background: ${(props) =>
      props.variant === "primary"
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    width: 0;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageStyles = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  position: relative;
  transition: all 0.2s ease;

  &::after {
    position: fixed;
    content: "";
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: transparent url("/images/noise2.jpg") repeat 0 0;
    animation: bg-animation 0.2s infinite;
    opacity: 0.07;
    z-index: 1000;
    pointer-events: none;

    @keyframes bg-animation {
      0% {
        transform: translate(0, 0);
      }
      10% {
        transform: translate(-5%, -5%);
      }
      20% {
        transform: translate(-10%, 5%);
      }
      30% {
        transform: translate(5%, -10%);
      }
      40% {
        transform: translate(-5%, 15%);
      }
      50% {
        transform: translate(-10%, 5%);
      }
      60% {
        transform: translate(15%, 0);
      }
      70% {
        transform: translate(0, 10%);
      }
      80% {
        transform: translate(-15%, 0);
      }
      90% {
        transform: translate(10%, 5%);
      }
      100% {
        transform: translate(5%, 0);
      }
    }
  }
`;

export const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
`;
