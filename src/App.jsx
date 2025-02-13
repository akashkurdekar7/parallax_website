import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Blog from "./components/Blog";
import CallBanner from "./components/CallBanner";
import Contact from "./components/Contact";

const theme = {
  primaryColor: "#E84545",
  secondaryColor: "#FF9292",
  textLight: "#ffffff",
  textDark: "#000000",
  backgroundDark: "#141414",
  backgroundLight: "#f1f1f1",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header />
        <main>
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

export default App;
