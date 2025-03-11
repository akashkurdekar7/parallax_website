import React from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <About />
        <Services />
        <Features />
        <Portfolio />
        <Pricing />
        <Team />
        <Banner />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
