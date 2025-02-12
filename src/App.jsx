import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const theme = {
  primaryColor: "#E84545",
  secondaryColor: "#FF9292",
  textLight: "#ffffff",
  textDark: "#000000",
  backgroundDark: "#000000",
  backgroundLight: "#ffffff",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header />
        <main>{/* <HeroSection /> */}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
