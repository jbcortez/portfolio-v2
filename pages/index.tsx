import Head from "next/head";
import { DarkTheme, LightTheme } from "../theme";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector } from "../redux/reduxHooks";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Hero from "../Sections/Hero";
import Skills from "../Sections/Skills";
import Projects from "../Sections/Projects";
import About from "../Sections/About";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import CursorOrnament from "../Components/CursorOrnament";

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
          <Contact />
          <Footer />
        </Main>
      </PageStyles>
    </ThemeProvider>
  );
}
const Main = styled.main`
  height: 100vh;
`;

const PageStyles = styled.div<{ showNav: boolean }>`
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  position: relative;
  overflow: ${(props) => props.showNav && "hidden"};
`;
