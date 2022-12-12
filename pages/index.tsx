import Head from "next/head";
import { DarkTheme, LightTheme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector } from "../redux/reduxHooks";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Hero from "../Sections/Home/Hero";
import Skills from "../Sections/Home/Skills";
import Projects from "../Sections/Home/Projects";
import About from "../Sections/Home/About";
import Contact from "../Sections/Home/Contact";
import Footer from "../Sections/Home/Footer";
import CursorOrnament from "../Components/CursorOrnament";
import React from "react";
import { PageStyles } from "../styles/Components";

export default function Home() {
  const theme = useAppSelector((state) => state.site.theme);
  const showNav = useAppSelector((state) => state.site.showNav);

  return (
    <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
      <Head>
        <title>Justin Cortez - Home</title>
      </Head>

      <PageStyles showNav={showNav}>
        <Header />
        <CursorOrnament />
        {showNav && <Nav />}

        <Main>
          <Hero />
          <Skills />
          <Projects />
          <About />

          <Row>
            <Container>
              <Contact />
              <Footer />
            </Container>
          </Row>

          <Copyright>
            Copyright © 2022 Justin Cortez. All rights reserved.
          </Copyright>
        </Main>
      </PageStyles>
    </ThemeProvider>
  );
}
const Main = styled.main`
  height: 100vh;
`;

const Container = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;

  @media screen and (min-width: 45rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Row = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.colors.secondary};
`;

const Copyright = styled.span`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  background: ${(props) => props.theme.colors.secondary};
  padding-bottom: ${(props) => props.theme.spacing[3]};
`;
