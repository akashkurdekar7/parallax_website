import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GlobalStyles from "./GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Blog from "./components/Blog";
import CallBanner from "./components/CallBanner";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const theme = {
  primaryColor: "#E84545",
  secondaryColor: "#FF9292",
  textLight: "#ffffff",
  textDark: "#000000",
  backgroundDark: "#141414",
  backgroundLight: "#f1f1f1",
};

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header />
        <main>
          <Navigator onClick={scrollToTop}>
            <FontAwesomeIcon className="icon" icon={faArrowUp} />
          </Navigator>
          <HeroSection />
          <About />
          <Services />
          <Features />
          <Portfolio />
          <Pricing />
          <Team />
          <CallBanner />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

const Navigator = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  .icon {
    font-size: 1.5rem;
    color: white;
  }
`;
export default App;
