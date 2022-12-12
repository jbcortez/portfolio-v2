import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector } from "../redux/reduxHooks";
import { DarkTheme, LightTheme } from "../theme";
import Head from "next/head";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Hero from "../Sections/ProjectDetails/Hero";
import HowDoesItWork from "../Sections/ProjectDetails/HowDoesItWork";
import TechStack from "../Sections/ProjectDetails/TechStack";
import Challenges from "../Sections/ProjectDetails/Challenges";
import Footer from "../Sections/ProjectDetails/Footer";
import { PageStyles } from "../styles/Components";

const ProjectDetails = () => {
  const theme = useAppSelector((state) => state.site.theme);
  const showNav = useAppSelector((state) => state.site.showNav);

  return (
    <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
      <Head>
        <title>Justin Cortez - Project Details</title>
      </Head>
      <Header />
      {showNav && <Nav />}
      <PageStyles style={{ paddingTop: "10rem" }} showNav={showNav}>
        <Hero />
        <TechStack />
        <HowDoesItWork />

        <Challenges />
      </PageStyles>
      <Footer />
      <Copyright>
        Copyright © 2022 Justin Cortez. All rights reserved.
      </Copyright>
    </ThemeProvider>
  );
};

export default ProjectDetails;

const Copyright = styled.span`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  background: ${(props) => props.theme.colors.secondary};
  padding-bottom: ${(props) => props.theme.spacing[3]};
`;
