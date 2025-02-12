import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import About from "./components/About";

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
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
